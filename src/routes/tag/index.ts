import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import { createTag, getTag, updateTag, deleteTag } from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { tagTable } from "@db/index";

const tagRouter = new OpenAPIHono();

tagRouter.openapi(createTag, async (ctx) => {
  const data = ctx.req.valid("json");

  try {
    const tag = await db
      .insert(tagTable)
      .values({
        id: uuidv4(),
        tag: data.tag,
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ tagId: tag.id }, "Tag created");
    return ctx.text("Tag created", 201);
  } catch (error) {
    logger.error({ error }, "Failed to create tag");
    return ctx.text("Failed to create tag", 400);
  }
});

tagRouter.openapi(getTag, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const tag = await db
    .select()
    .from(tagTable)
    .where(eq(tagTable.id, id))
    .then((rows) => rows[0]);

  if (!tag) {
    return ctx.text("Tag not found", 404);
  }

  return ctx.json(tag);
});

tagRouter.openapi(updateTag, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  try {
    const updated = await db
      .update(tagTable)
      .set({
        tag: data.tag,
      })
      .where(eq(tagTable.id, id))
      .returning()
      .then((rows) => rows[0]);

    logger.info({ tagId: updated.id }, "Tag updated");
    return ctx.text("Tag updated");
  } catch (error) {
    logger.warn({ error }, "Failed to update tag");
    return ctx.text("Tag not found", 404);
  }
});

tagRouter.openapi(deleteTag, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(tagTable).where(eq(tagTable.id, id));
    logger.info({ tagId: id }, "Tag deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete tag");
    return ctx.text("Tag not found", 404);
  }
});

export default tagRouter;
