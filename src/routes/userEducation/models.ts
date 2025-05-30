import { z } from "@hono/zod-openapi";

export const createUserEducationSchema = z.object({
  title: z.string().openapi({ example: "MBBS" }),
  description: z.string().openapi({ example: "Bachelor of Medicine" }),
  startDate: z.string().datetime().openapi({ example: "2020-08-01T00:00:00Z" }),
  endDate: z.string().datetime().optional(),
  institutionId: z.string().uuid().openapi({ example: "institution-uuid" }),
});

export const userEducationSchema = createUserEducationSchema.extend({
  id: z.string().uuid(),
  userId: z.string().uuid(),
});
