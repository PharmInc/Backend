import { OpenAPIHono } from "@hono/zod-openapi";
import { getUserEducation, getUserEducationById } from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { userEducationTable } from "@db/index";

const educationRouter = new OpenAPIHono();

educationRouter.openapi(getUserEducation, async (ctx) => {
  const token = ctx.get("jwtPayload");

  const education = await db
    .select()
    .from(userEducationTable)
    .where(eq(userEducationTable.userId, token.userId));

  if (!education || education.length === 0) {
    return ctx.text("Education not found", 404);
  }

  return ctx.json(education);
});

educationRouter.openapi(getUserEducationById, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const education = await db
    .select()
    .from(userEducationTable)
    .where(eq(userEducationTable.userId, id));

  if (!education || education.length === 0) {
    return ctx.text("Education not found", 404);
  }

  return ctx.json(education);
});

export default educationRouter;
