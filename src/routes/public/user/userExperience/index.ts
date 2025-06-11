import { OpenAPIHono } from "@hono/zod-openapi";
import { getUserExperience, getUserExperienceById } from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { userExperienceTable } from "@db/index";

const experienceRouter = new OpenAPIHono();

experienceRouter.openapi(getUserExperience, async (ctx) => {
  const token = ctx.get("jwtPayload");

  const experiences = await db
    .select()
    .from(userExperienceTable)
    .where(eq(userExperienceTable.userId, token.userId));

  if (!experiences || experiences.length === 0) {
    return ctx.text("Experience not found", 404);
  }

  return ctx.json(experiences);
});

experienceRouter.openapi(getUserExperienceById, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const experiences = await db
    .select()
    .from(userExperienceTable)
    .where(eq(userExperienceTable.userId, id));

  if (!experiences || experiences.length === 0) {
    return ctx.text("Experience not found", 404);
  }

  return ctx.json(experiences);
});

export default experienceRouter;
