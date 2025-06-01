import { z } from "@hono/zod-openapi";

export const createUserExperienceSchema = z.object({
  title: z.string().openapi({ example: "Software Engineer" }),
  description: z.string().openapi({ example: "Worked on backend APIs" }),
  startDate: z.string().datetime().openapi({ example: "2021-01-01T00:00:00Z" }),
  endDate: z.string().datetime().optional(),
  institutionId: z.string().uuid().openapi({ example: "institution-uuid" }),
});

export const userExperienceSchema = createUserExperienceSchema
  .extend({
    id: z.string().uuid(),
    userId: z.string().uuid(),
  })
  .openapi("userExperienceSchema");
