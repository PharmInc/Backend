import { pgTable, uuid} from "drizzle-orm/pg-core";

import { tagTable } from "./tag";
import { userTable } from "../user";


export const userTagTable = pgTable("user_tag", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: uuid("user_id").references(() => userTable.id, {
    onDelete: "cascade",
  }),

  tagId: uuid("tag_id").references(() => tagTable.id, {
    onDelete: "set null",
  }),
});