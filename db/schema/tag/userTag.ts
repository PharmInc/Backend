import { pgTable, uuid} from "drizzle-orm/pg-core";

import { tagTable } from "./tag";
import { userTable } from "../user";

import { z } from "@hono/zod-openapi";

export const userTagTable = pgTable("user_tag", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: uuid("user_id").references(() => userTable.id, {
    onDelete: "cascade",
  }),

  tagId: uuid("tag_id").references(() => tagTable.id, {
    onDelete: "set null",
  }),
});

export const createUserTagSchema = z.object({
  userId: z.string().uuid().openapi({ example: "user-uuid" }),
  tagId: z.string().uuid().openapi({ example: "tag-uuid" }),
});

export const userTagSchema = createUserTagSchema
  .extend({
    id: z.string().uuid(),
  })
  .openapi("userTagSchema");