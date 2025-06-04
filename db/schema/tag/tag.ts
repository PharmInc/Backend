import { pgTable, uuid, text } from "drizzle-orm/pg-core";

import { z } from "@hono/zod-openapi";

export const tagTable = pgTable("tag", {
  id: uuid("id").defaultRandom().primaryKey(),
  tag: text("tag").notNull().unique(),
});

export const createTagSchema = z.object({
  tag: z.string().openapi({ example: "Cardiology" }),
});

export const tagSchema = createTagSchema
  .extend({
    id: z.string().uuid(),
  })
  .openapi("tagSchema");