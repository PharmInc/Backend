import { pgTable, unique, uuid, timestamp, text, foreignKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const auth = pgTable("auth", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	email: text().notNull(),
	password: text().notNull(),
}, (table) => [
	unique("auth_email_unique").on(table.email),
]);

export const user = pgTable("user", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	email: text().notNull(),
	specialization: text().notNull(),
	profilePicture: text("profile_picture"),
	about: text(),
	authId: uuid("auth_id"),
}, (table) => [
	foreignKey({
			columns: [table.authId],
			foreignColumns: [auth.id],
			name: "user_auth_id_auth_id_fk"
		}).onDelete("cascade"),
	unique("user_email_unique").on(table.email),
	unique("user_auth_id_unique").on(table.authId),
]);

export const userEducation = pgTable("user_education", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	title: text().notNull(),
	description: text().notNull(),
	startDate: timestamp("start_date", { withTimezone: true, mode: 'string' }).notNull(),
	endDate: timestamp("end_date", { withTimezone: true, mode: 'string' }),
	userId: uuid("user_id"),
	institutionId: uuid("institution_id"),
}, (table) => [
	foreignKey({
			columns: [table.institutionId],
			foreignColumns: [institution.id],
			name: "user_education_institution_id_institution_id_fk"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "user_education_user_id_user_id_fk"
		}).onDelete("cascade"),
]);

export const institution = pgTable("institution", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	name: text().notNull(),
	profilePicture: text("profile_picture"),
	about: text(),
	location: text(),
}, (table) => [
	unique("institution_name_unique").on(table.name),
]);

export const userExperience = pgTable("user_experience", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	title: text().notNull(),
	description: text().notNull(),
	startDate: timestamp("start_date", { withTimezone: true, mode: 'string' }).notNull(),
	endDate: timestamp("end_date", { withTimezone: true, mode: 'string' }),
	userId: uuid("user_id"),
	institutionId: uuid("institution_id"),
}, (table) => [
	foreignKey({
			columns: [table.institutionId],
			foreignColumns: [institution.id],
			name: "user_experience_institution_id_institution_id_fk"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "user_experience_user_id_user_id_fk"
		}).onDelete("cascade"),
]);
