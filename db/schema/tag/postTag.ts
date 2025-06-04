import { pgTable, uuid} from "drizzle-orm/pg-core";

import { tagTable } from "./tag";
import { postTable } from "../post/post";


export const postTagsTable = pgTable("post_tags", {
  id: uuid("id").defaultRandom().primaryKey(),

  postId: uuid("post_id").references(() => postTable.id, {
    onDelete: "cascade",
  }),

  tagId: uuid("tag_id").references(() => tagTable.id, {
    onDelete: "set null",
  }),
});