import { pgTable, uuid} from "drizzle-orm/pg-core";

import { tagTable } from "./tag";
import { postTable } from "../post/post";

import { z } from "@hono/zod-openapi";

export const postTagsTable = pgTable("post_tags", {
  id: uuid("id").defaultRandom().primaryKey(),

  postId: uuid("post_id").references(() => postTable.id, {
    onDelete: "cascade",
  }),

  tagId: uuid("tag_id").references(() => tagTable.id, {
    onDelete: "set null",
  }),
});

export const createPostTagSchema = z.object({
  postId: z.string().uuid().openapi({ example: "post-uuid" }),
  tagId: z.string().uuid().openapi({ example: "tag-uuid" }),
});

export const postTagSchema = createPostTagSchema
  .extend({
    id: z.string().uuid(),
  })
  .openapi("postTagSchema");