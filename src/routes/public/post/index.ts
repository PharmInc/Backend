import { OpenAPIHono } from "@hono/zod-openapi";
import { getPost, getPostsById } from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { postTable } from "@db/index";

const postRouter = new OpenAPIHono();

postRouter.openapi(getPost, async (ctx) => {
  const post = await db.select().from(postTable);

  if (!post) {
    return ctx.text("Post not found", 404);
  }

  return ctx.json(post);
});

postRouter.openapi(getPostsById, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const post = await db
    .select()
    .from(postTable)
    .where(eq(postTable.userId, id));

  if (!post) {
    return ctx.text("Post not found", 404);
  }

  return ctx.json(post);
});

export default postRouter;
