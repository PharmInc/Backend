import { OpenAPIHono } from "@hono/zod-openapi";
import db from "@lib/drizzle-client";
import { institutionTable } from "@db/index";
import { getInstitution, getInstitutionById } from "./route";
import { eq } from "drizzle-orm";

const institutionRouter = new OpenAPIHono();

institutionRouter.openapi(getInstitution, async (ctx) => {
  const institution = await db.select().from(institutionTable);

  if (!institution) {
    return ctx.text("Institution not found", 404);
  }

  return ctx.json(institution);
});

institutionRouter.openapi(getInstitutionById, async (ctx) => {
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

export default institutionRouter;
