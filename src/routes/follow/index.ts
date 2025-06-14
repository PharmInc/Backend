import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";

import { createFollow, deleteFollow, getFollow } from "./route";
import { followTable, userTable } from "@db/index";

const followRouter = new OpenAPIHono();

// Create a Follow
followRouter.openapi(createFollow, async (ctx) => {
  const { id } = ctx.req.valid("param"); // ID of the user to follow
  const token = ctx.get("jwtPayload");

  try {
    // Check if the target user to follow exists
    const targetUser = await db
      .select()
      .from(userTable)
      .where(eq(userTable.id, id))
      .then((rows) => rows[0]);

    if (!targetUser) {
      logger.warn({ targetUserId: id }, "Target user not found");
      return ctx.text("Target user not found", 404);
    }

    const follow = await db
      .insert(followTable)
      .values({
        id: uuidv4(),
        userId: token.id,
        followerId: id, // renamed from connectorId
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ followId: follow.id }, "Follow created");
    return ctx.text("Follow created", 201);
  } catch (error) {
    logger.error({ error }, "Failed to create follow");
    return ctx.text("Failed to create follow", 400);
  }
});

// Delete a Follow
followRouter.openapi(deleteFollow, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(followTable).where(eq(followTable.id, id));
    logger.info({ followId: id }, "Follow deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete follow");
    return ctx.text("Follow not found", 404);
  }
});

// Get all Follows for the logged-in user
followRouter.openapi(getFollow, async (ctx) => {
  const token = ctx.get("jwtPayload");

  const follows = await db
    .select()
    .from(followTable)
    .where(eq(followTable.userId, token.userId));

  if (!follows || follows.length === 0) {
    return ctx.text("No follows found", 404);
  }

  return ctx.json(follows);
});

export default followRouter;
