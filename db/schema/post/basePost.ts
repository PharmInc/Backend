import { uuid, timestamp, text } from "drizzle-orm/pg-core";
import { userTable } from "../user";

export const basePost =  {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  content: text("content").notNull(),

  reactions: text("reactions"),
  shares: text("shares"),
  saves: text("saves"),

  userId: uuid("user_id")
    .unique()
    .references(() => userTable.id),
};