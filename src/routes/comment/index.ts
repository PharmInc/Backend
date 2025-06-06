import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import {
  createComment,
  getComment,
  updateComment,
  deleteComment,
} from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { commentTable } from "@db/index";

const commentRouter = new OpenAPIHono();

commentRouter.openapi(createComment, async (ctx) => {
  const data = ctx.req.valid("json");

  try {
    const comment = await db
      .insert(commentTable)
      .values({
        id: uuidv4(),
        content: data.content,
        postId: data.postId,
        parentId: data.parentId ?? null,
        userId: data.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ commentId: comment.id }, "Comment created");
    return ctx.json({ commentId: comment.id }, 201);
  } catch (error) {
    logger.error({ error }, "Failed to create comment");
    return ctx.text("Failed to create comment", 400);
  }
});

commentRouter.openapi(getComment, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const comment = await db
    .select()
    .from(commentTable)
    .where(eq(commentTable.id, id))
    .then((rows) => rows[0]);

  if (!comment) {
    return ctx.text("Comment not found", 404);
  }

  return ctx.json(comment);
});

commentRouter.openapi(updateComment, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  try {
    const updated = await db
      .update(commentTable)
      .set({
        ...data,
        createdAt: data.createdAt ? new Date(data.createdAt) : undefined,
        updatedAt: new Date(),
      })
      .where(eq(commentTable.id, id))
      .returning()
      .then((rows) => rows[0]);

    logger.info({ commentId: updated.id }, "Comment updated");
    return ctx.text("Comment updated");
  } catch (error) {
    logger.warn({ error }, "Failed to update comment");
    return ctx.text("Comment not found", 404);
  }
});

commentRouter.openapi(deleteComment, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(commentTable).where(eq(commentTable.id, id));
    logger.info({ commentId: id }, "Comment deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete comment");
    return ctx.text("Comment not found", 404);
  }
});

export default commentRouter;
