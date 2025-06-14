import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import db from "@lib/drizzle-client";
import { eq, and } from "drizzle-orm";

import {
  createConnection,
  deleteConnection,
  getConnection,
  acceptConnection,
  getAcceptedConnections,
} from "./route";
import { connectionsTable, userTable } from "@db/index";

const connectionRouter = new OpenAPIHono();

// Create a connection
connectionRouter.openapi(createConnection, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const token = ctx.get("jwtPayload");

  try {
    // Check if connector exists
    const connector = await db
      .select()
      .from(userTable)
      .where(eq(userTable.id, id))
      .then((rows) => rows[0]);

    if (!connector) {
      logger.warn({ connectorId: id }, "Connector not found");
      return ctx.text("Connector not found", 404);
    }

    const connection = await db
      .insert(connectionsTable)
      .values({
        id: uuidv4(),
        userId: token.id,
        connectorId: id,
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ connectionId: connection.id }, "Connection created");
    return ctx.text("Connection created", 201);
  } catch (error) {
    logger.error({ error }, "Failed to create connection");
    return ctx.text("Failed to create connection", 400);
  }
});

// Delete a connection
connectionRouter.openapi(deleteConnection, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(connectionsTable).where(eq(connectionsTable.id, id));
    logger.info({ connectionId: id }, "Connection deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete connection");
    return ctx.text("Connection not found", 404);
  }
});

connectionRouter.openapi(getConnection, async (ctx) => {
  const token = ctx.get("jwtPayload");

  const connection = await db
    .select()
    .from(connectionsTable)
    .where(eq(connectionsTable.userId, token.userId));

  if (!connection) {
    return ctx.text("connection not found", 404);
  }

  return ctx.json(connection);
});

connectionRouter.openapi(acceptConnection, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const token = ctx.get("jwtPayload");

  try {
    const updated = await db
      .update(connectionsTable)
      .set({ accepted: true })
      .where(
        and(
          eq(connectionsTable.id, id),
          eq(connectionsTable.connectorId, token.id) // only the recipient can accept
        )
      )
      .returning()
      .then((rows) => rows[0]);

    if (!updated) {
      return ctx.text("Connection not found or unauthorized", 404);
    }

    logger.info({ connectionId: id }, "Connection accepted");
    return ctx.text("Connection accepted", 200);
  } catch (err) {
    logger.error({ error: err }, "Failed to accept connection");
    return ctx.text("Failed to accept connection", 400);
  }
});

// Get all accepted connections
connectionRouter.openapi(getAcceptedConnections, async (ctx) => {
  const token = ctx.get("jwtPayload");

  const connections = await db
    .select()
    .from(connectionsTable)
    .where(
      and(
        eq(connectionsTable.userId, token.id),
        eq(connectionsTable.accepted, true)
      )
    );

  if (!connections || connections.length === 0) {
    return ctx.text("No accepted connections found", 404);
  }

  return ctx.json(connections);
});

export default connectionRouter;
