import { relations } from "drizzle-orm/relations";
import { auth, user, institution, userEducation, userExperience } from "./schema";

export const userRelations = relations(user, ({one, many}) => ({
	auth: one(auth, {
		fields: [user.authId],
		references: [auth.id]
	}),
	userEducations: many(userEducation),
	userExperiences: many(userExperience),
}));

export const authRelations = relations(auth, ({many}) => ({
	users: many(user),
}));

export const userEducationRelations = relations(userEducation, ({one}) => ({
	institution: one(institution, {
		fields: [userEducation.institutionId],
		references: [institution.id]
	}),
	user: one(user, {
		fields: [userEducation.userId],
		references: [user.id]
	}),
}));

export const institutionRelations = relations(institution, ({many}) => ({
	userEducations: many(userEducation),
	userExperiences: many(userExperience),
}));

export const userExperienceRelations = relations(userExperience, ({one}) => ({
	institution: one(institution, {
		fields: [userExperience.institutionId],
		references: [institution.id]
	}),
	user: one(user, {
		fields: [userExperience.userId],
		references: [user.id]
	}),
}));