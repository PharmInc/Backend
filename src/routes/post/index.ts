import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import { createPost, getPost, updatePost, deletePost } from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { postTable } from "@db/index";

const postRouter = new OpenAPIHono();

postRouter.openapi(createPost, async (ctx) => {
  const data = ctx.req.valid("json");

  try {
    const post = await db
      .insert(postTable)
      .values({
        id: uuidv4(),
        content: data.content,
        userId: data.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ postId: post.id }, "Post created");
    return ctx.json({ postId: post.id }, 201);
  } catch (error) {
    logger.error({ error }, "Failed to create post");
    return ctx.text("Failed to create post", 400);
  }
});

postRouter.openapi(getPost, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const post = await db
    .select()
    .from(postTable)
    .where(eq(postTable.id, id))
    .then((rows) => rows[0]);

  if (!post) {
    return ctx.text("Post not found", 404);
  }

  return ctx.json(post);
});

postRouter.openapi(updatePost, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  try {
    const updated = await db
      .update(postTable)
      .set({
        ...data,
        createdAt: data.createdAt ? new Date(data.createdAt) : undefined,
        updatedAt: new Date(),
      })
      .where(eq(postTable.id, id))
      .returning()
      .then((rows) => rows[0]);

    logger.info({ postId: updated.id }, "Post updated");
    return ctx.text("Post updated");
  } catch (error) {
    logger.warn({ error }, "Failed to update post");
    return ctx.text("Post not found", 404);
  }
});

postRouter.openapi(deletePost, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(postTable).where(eq(postTable.id, id));
    logger.info({ postId: id }, "Post deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete post");
    return ctx.text("Post not found", 404);
  }
});

export default postRouter;
