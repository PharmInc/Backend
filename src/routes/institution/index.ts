import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { institutionTable } from "@db/index";
import {
  createInstitution,
  getInstitution,
  updateInstitution,
  deleteInstitution,
} from "./route";

const institutionRouter = new OpenAPIHono();

institutionRouter.openapi(createInstitution, async (ctx) => {
  const data = ctx.req.valid("json");

  try {
    const institution = await db
      .insert(institutionTable)
      .values({
        id: uuidv4(),
        name: data.name,
        about: data.about,
        location: data.location,
      })
      .returning()
      .then((rows) => rows[0]);

    logger.info({ institutionId: institution.id }, "Institution created");
    return ctx.text("Institution created", 201);
  } catch (error) {
    logger.error({ error }, "Failed to create institution");
    return ctx.text("Failed to create institution", 400);
  }
});

institutionRouter.openapi(getInstitution, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const institution = await db
    .select()
    .from(institutionTable)
    .where(eq(institutionTable.id, id))
    .then((rows) => rows[0]);

  if (!institution) {
    return ctx.text("Institution not found", 404);
  }

  return ctx.json(institution);
});

institutionRouter.openapi(updateInstitution, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  try {
    const updated = await db
      .update(institutionTable)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(institutionTable.id, id))
      .returning()
      .then((rows) => rows[0]);

    logger.info({ institutionId: updated.id }, "Institution updated");
    return ctx.text("Institution updated");
  } catch (error) {
    logger.warn({ error }, "Failed to update institution");
    return ctx.text("Institution not found", 404);
  }
});

institutionRouter.openapi(deleteInstitution, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await db.delete(institutionTable).where(eq(institutionTable.id, id));
    logger.info({ institutionId: id }, "Institution deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete institution");
    return ctx.text("Institution not found", 404);
  }
});

export default institutionRouter;
