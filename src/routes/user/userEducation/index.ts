import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import logger from "@lib/logging-client";
import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import {
  createUserEducation,
  getUserEducation,
  updateUserEducation,
  deleteUserEducation,
} from "./route";
import { userEducationTable } from "@db/index";

const educationRouter = new OpenAPIHono();

educationRouter.openapi(createUserEducation, async (ctx) => {
  const data = ctx.req.valid("json");
  const token = ctx.get("jwtPayload");

  const education = await db
    .insert(userEducationTable)
    .values({
      id: uuidv4(),
      title: data.title,
      description: data.description,
      startDate: new Date(data.startDate),
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      userId: token.id,
      institutionId: data.institutionId,
    })
    .returning()
    .then((rows) => rows[0]);

  logger.info({ educationId: education.id }, "Education created");
  return ctx.json({ educationId: education.id }, 201);
});

educationRouter.openapi(getUserEducation, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const education = await db
    .select()
    .from(userEducationTable)
    .where(eq(userEducationTable.id, id))
    .then((rows) => rows[0]);

  if (!education) {
    return ctx.text("Education not found", 404);
  }

  return ctx.json(education);
});

educationRouter.openapi(updateUserEducation, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  const updated = await db
    .update(userEducationTable)
    .set({
      ...data,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      updatedAt: new Date(),
    })
    .where(eq(userEducationTable.id, id))
    .returning()
    .then((rows) => rows[0]);

  if (!updated) {
    return ctx.text("Education not found", 404);
  }

  logger.info({ educationId: updated.id }, "Education updated");
  return ctx.text("Education updated");
});

educationRouter.openapi(deleteUserEducation, async (ctx) => {
  const { id } = ctx.req.valid("param");

  await db.delete(userEducationTable).where(eq(userEducationTable.id, id));

  logger.info({ educationId: id }, "Education deleted");
  return ctx.body(null, 204);
});

export default educationRouter;
