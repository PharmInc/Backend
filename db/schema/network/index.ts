import { uuid, timestamp, pgTable, boolean } from "drizzle-orm/pg-core";
import { authTable } from "../auth";

export const base = {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),

  user1Id: uuid("user1_id")
    .notNull()
    .references(() => authTable.id),
  user2Id: uuid("user2_id")
    .notNull()
    .references(() => authTable.id),
};

export const followTable = pgTable("follow", {
  ...base,
});

export const conectTable = pgTable("connect", {
  ...base,
  accepted: boolean("accepted").default(false),
});
