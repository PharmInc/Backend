import { z } from "@hono/zod-openapi";

export const createInstitutionSchema = z.object({
  name: z.string().openapi({ example: "AIIMS Delhi" }),
  about: z.string().openapi({ example: "Premier medical institute" }),
  location: z.string().openapi({ example: "New Delhi, India" }),
});

export const institutionSchema = createInstitutionSchema
  .extend({
    id: z.string().uuid(),
    profilePicture: z.string().optional(),
  })
  .openapi("institutionSchema");
