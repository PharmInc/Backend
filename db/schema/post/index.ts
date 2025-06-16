import { uuid, timestamp, text, pgTable, integer } from "drizzle-orm/pg-core";
import { userTable } from "../user";

export const basePost = {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  content: text("content").notNull(),

  reactions: integer("reactions"),
  shares: integer("shares"),
  saves: integer("saves"),

  userId: uuid("user_id").references(() => userTable.id),
};

export const postTable = pgTable("post", {
  ...basePost,

  title: text("title").notNull(),
  attachmentId: text("attachment_id"),
});

export const commentTable = pgTable("comment", {
  ...basePost,

  postId: uuid("post_id")
    .references(() => postTable.id)
    .notNull(),

  parentId: uuid("parent_id").references(() => commentTable.id),
});
