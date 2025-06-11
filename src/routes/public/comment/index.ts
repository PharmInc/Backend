import { OpenAPIHono } from "@hono/zod-openapi";
import { getComment, getCommentById } from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { commentTable } from "@db/index";

const commentRouter = new OpenAPIHono();

commentRouter.openapi(getComment, async (ctx) => {
  const token = ctx.get("jwtPayload");

  const comment = await db
    .select()
    .from(commentTable)
    .where(eq(commentTable.userId, token.userId));

  if (!comment) {
    return ctx.text("Comment not found", 404);
  }

  return ctx.json(comment);
});

commentRouter.openapi(getCommentById, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const comment = await db
    .select()
    .from(commentTable)
    .where(eq(commentTable.userId, id));

  if (!comment) {
    return ctx.text("Comment not found", 404);
  }

  return ctx.json(comment);
});

export default commentRouter;
