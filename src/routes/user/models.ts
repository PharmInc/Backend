import { z } from "@hono/zod-openapi";

export const createUserSchema = z.object({
  firstName: z.string().openapi({ example: "John" }),
  lastName: z.string().openapi({ example: "Doe" }),
  specialization: z.string().openapi({ example: "Cardiology" }),
});

export const userSchema = createUserSchema
  .extend({
    id: z.string().uuid(),
    email: z.string().email().openapi({ example: "example@example.com" }),
    profilePicture: z.string().optional(),
    about: z.string().optional(),
    authId: z.string().uuid().optional(),
  })
  .openapi("userSchema");
