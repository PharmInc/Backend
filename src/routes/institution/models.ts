import { z } from "@hono/zod-openapi";

export const institutionSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string().openapi({ example: "AIIMS Delhi" }),
    about: z.string().openapi({ example: "Premier medical institute" }),
    location: z.string().openapi({ example: "New Delhi, India" }),
    profilePicture: z.string().optional(),
  })
  .openapi("institutionSchema");

export const createInstitutionSchema = z.object({
  name: z.string().openapi({ example: "AIIMS Delhi" }),
  about: z.string().openapi({ example: "Premier medical institute" }),
  location: z.string().openapi({ example: "New Delhi, India" }),
});
