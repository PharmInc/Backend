import { OpenAPIHono } from "@hono/zod-openapi";
import { getUser, getUserById } from "./route";

import db from "@lib/drizzle-client";
import { eq } from "drizzle-orm";
import { userTable, userExperienceTable, userEducationTable } from "@db/index";

const userRouter = new OpenAPIHono();

userRouter.openapi(getUser, async (ctx) => {
  const user = await db
    .select({
      user: userTable,
      experiences: userExperienceTable,
      educations: userEducationTable,
    })
    .from(userTable)
    .leftJoin(userExperienceTable, eq(userTable.id, userExperienceTable.userId))
    .leftJoin(userEducationTable, eq(userTable.id, userEducationTable.userId));

  if (!user) {
    return ctx.text("User not found", 404);
  }

  return ctx.json(user);
});

userRouter.openapi(getUserById, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const user = await db
    .select({
      user: userTable,
      experiences: userExperienceTable,
      educations: userEducationTable,
    })
    .from(userTable)
    .where(eq(userTable.id, id))
    .leftJoin(userExperienceTable, eq(userTable.id, userExperienceTable.userId))
    .leftJoin(userEducationTable, eq(userTable.id, userEducationTable.userId))
    .then((rows) => rows[0]);

  if (!user) {
    return ctx.text("User not found", 404);
  }

  return ctx.json(user);
});

export default userRouter;
