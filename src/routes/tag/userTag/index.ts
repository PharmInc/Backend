import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import {
  createUserTag,
  getUserTag,
  updateUserTag,
  deleteUserTag,
} from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { userTagTable } from "@db/index";

const userTagRouter = new OpenAPIHono();

userTagRouter.openapi(createUserTag, async (ctx) => {
  const data = ctx.req.valid("json");

  try {
    const created = await db
      .insert(userTagTable)
      .values({
        id: uuidv4(),
        userId: data.userId,
        tagId: data.tagId,
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ id: created.id }, "User-Tag relation created");
    return ctx.text("User-Tag relation created", 201);
  } catch (error) {
    logger.error({ error }, "Failed to create User-Tag relation");
    return ctx.text("Failed to create User-Tag relation", 400);
  }
});

userTagRouter.openapi(getUserTag, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const relation = await db
    .select()
    .from(userTagTable)
    .where(eq(userTagTable.id, id))
    .then((rows) => rows[0]);

  if (!relation) {
    return ctx.text("User-Tag relation not found", 404);
  }

  return ctx.json(relation);
});

userTagRouter.openapi(updateUserTag, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  try {
    const updated = await db
      .update(userTagTable)
      .set({
        userId: data.userId,
        tagId: data.tagId,
      })
      .where(eq(userTagTable.id, id))
      .returning()
      .then((rows) => rows[0]);

    logger.info({ id: updated.id }, "User-Tag relation updated");
    return ctx.text("User-Tag relation updated");
  } catch (error) {
    logger.warn({ error }, "Failed to update User-Tag relation");
    return ctx.text("User-Tag relation not found", 404);
  }
});

userTagRouter.openapi(deleteUserTag, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(userTagTable).where(eq(userTagTable.id, id));
    logger.info({ id }, "User-Tag relation deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete User-Tag relation");
    return ctx.text("User-Tag relation not found", 404);
  }
});

export default userTagRouter;
