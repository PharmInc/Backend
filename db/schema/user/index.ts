import {
  pgTable,
  uuid,
  timestamp,
  text,
  boolean,
  integer,
} from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),

  name: text("name").notNull(),
  location: text("location").notNull(),
  role: text("role").notNull(),
  email: text("email").notNull().unique(),

  verified: boolean("verified").default(false),

  profilePicture: text("profile_picture"),
  bannerPicture: text("banner_picture"),

  bio: text("bio"),
  about: text("about"),
  followers: integer("followers").default(0),
  connections: integer("connections").default(0),
});
