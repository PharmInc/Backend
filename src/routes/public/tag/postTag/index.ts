import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import {
  createPostTag,
  getPostTag,
  updatePostTag,
  deletePostTag,
} from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { postTagsTable } from "@db/index";

const postTagRouter = new OpenAPIHono();

postTagRouter.openapi(createPostTag, async (ctx) => {
  const data = ctx.req.valid("json");

  try {
    const created = await db
      .insert(postTagsTable)
      .values({
        id: uuidv4(),
        postId: data.postId,
        tagId: data.tagId,
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ id: created.id }, "Post-Tag relation created");
    return ctx.json({ postTagId: created.id }, 201);
  } catch (error) {
    logger.error({ error }, "Failed to create Post-Tag relation");
    return ctx.text("Failed to create Post-Tag relation", 400);
  }
});

postTagRouter.openapi(getPostTag, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const relation = await db
    .select()
    .from(postTagsTable)
    .where(eq(postTagsTable.id, id))
    .then((rows) => rows[0]);

  if (!relation) {
    return ctx.text("Post-Tag relation not found", 404);
  }

  return ctx.json(relation);
});

postTagRouter.openapi(updatePostTag, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  try {
    const updated = await db
      .update(postTagsTable)
      .set({
        postId: data.postId,
        tagId: data.tagId,
      })
      .where(eq(postTagsTable.id, id))
      .returning()
      .then((rows) => rows[0]);

    logger.info({ id: updated.id }, "Post-Tag relation updated");
    return ctx.text("Post-Tag relation updated");
  } catch (error) {
    logger.warn({ error }, "Failed to update Post-Tag relation");
    return ctx.text("Post-Tag relation not found", 404);
  }
});

postTagRouter.openapi(deletePostTag, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(postTagsTable).where(eq(postTagsTable.id, id));
    logger.info({ id }, "Post-Tag relation deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete Post-Tag relation");
    return ctx.text("Post-Tag relation not found", 404);
  }
});

export default postTagRouter;
