import { OpenAPIHono } from "@hono/zod-openapi";
import logger from "@lib/logging-client";
import { createUser, getUser, updateUser, deleteUser } from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import {
  authTable,
  userTable,
  userExperienceTable,
  userEducationTable,
} from "@db/index";

const userRouter = new OpenAPIHono();

userRouter.openapi(createUser, async (ctx) => {
  const data = ctx.req.valid("json");
  const token = ctx.get("jwtPayload");

  try {
    const auth = await db
      .selectDistinct()
      .from(authTable)
      .where(eq(authTable.id, token.id))
      .then((rows) => rows[0]);

    if (!auth) {
      logger.warn({ userId: token.id }, "Auth record not found");
      return ctx.text("Auth record not found", 404);
    }

    const user = await db
      .insert(userTable)
      .values({
        id: auth.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: auth.email,
        specialization: data.specialization,
        authId: auth.id,
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ userId: user.id }, "User created");
    return ctx.text("User created", 201);
  } catch (error) {
    logger.error({ error }, "Failed to create user");
    return ctx.text("Failed to create user", 400);
  }
});

userRouter.openapi(getUser, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const user = await db
    .select({
      user: userTable,
      experiences: userExperienceTable,
      educations: userEducationTable,
    })
    .from(userTable)
    .where(eq(userTable.id, id))
    .leftJoin(userExperienceTable, eq(userTable.id, userExperienceTable.userId))
    .leftJoin(userEducationTable, eq(userTable.id, userEducationTable.userId));

  if (!user) {
    return ctx.text("User not found", 404);
  }

  return ctx.json(user);
});

userRouter.openapi(updateUser, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  try {
    const updated = await db
      .update(userTable)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(userTable.id, id))
      .returning()
      .then((rows) => rows[0]);

    logger.info({ userId: updated.id }, "User updated");
    return ctx.text("User updated");
  } catch (error) {
    logger.warn({ error }, "Failed to update user");
    return ctx.text("User not found", 404);
  }
});

userRouter.openapi(deleteUser, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(userTable).where(eq(userTable.id, id));

    logger.info({ userId: id }, "User deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete user");
    return ctx.text("User not found", 404);
  }
});

export default userRouter;
