import { pgTable, uuid, text } from "drizzle-orm/pg-core";

export const tagTable = pgTable("tag", {
  id: uuid("id").defaultRandom().primaryKey(),
  tag: text("tag").notNull().unique(),
});