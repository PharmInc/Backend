import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "../../lib/logging-client";
import db from "../../lib/drizzle-client";
import { eq } from "drizzle-orm";
import {
  createUserExperience,
  getUserExperience,
  updateUserExperience,
  deleteUserExperience,
} from "./route";
import { userExperienceTable, userTable } from "../../../db";

const experienceRouter = new OpenAPIHono();

experienceRouter.openapi(createUserExperience, async (ctx) => {
  const data = ctx.req.valid("json");
  const token = ctx.get("jwtPayload");

  const user = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, token.email))
    .then((rows) => rows[0]);

  if (!user) {
    logger.warn({ email: token.email }, "User not found");
    return ctx.text("User not found", 404);
  }

  const experience = await db
    .insert(userExperienceTable)
    .values({
      id: uuidv4(),
      title: data.title,
      description: data.description,
      startDate: new Date(data.startDate),
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      userId: user.id,
      institutionId: data.institutionId,
    })
    .returning()
    .then((rows) => rows[0]);

  logger.info({ experienceId: experience.id }, "Experience created");
  return ctx.text("Experience created", 201);
});

experienceRouter.openapi(getUserExperience, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const experience = await db
    .select()
    .from(userExperienceTable)
    .where(eq(userExperienceTable.id, id))
    .then((rows) => rows[0]);

  if (!experience) {
    return ctx.text("Experience not found", 404);
  }

  return ctx.json(experience);
});

experienceRouter.openapi(updateUserExperience, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  const updated = await db
    .update(userExperienceTable)
    .set({
      ...data,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      updatedAt: new Date(),
    })
    .where(eq(userExperienceTable.id, id))
    .returning()
    .then((rows) => rows[0]);

  if (!updated) {
    return ctx.text("Experience not found", 404);
  }

  logger.info({ experienceId: updated.id }, "Experience updated");
  return ctx.text("Experience updated");
});

experienceRouter.openapi(deleteUserExperience, async (ctx) => {
  const { id } = ctx.req.valid("param");

  await db.delete(userExperienceTable).where(eq(userExperienceTable.id, id));

  logger.info({ experienceId: id }, "Experience deleted");
  return ctx.body(null, 204);
});

export default experienceRouter;
