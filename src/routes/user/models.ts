import { z } from "@hono/zod-openapi";

export const userSchema = z
  .object({
    firstName: z.string().openapi({ example: "John" }),
    lastName: z.string().openapi({ example: "Doe" }),
    email: z.string().email().openapi({ example: "john.doe@example.com" }),
    specialization: z.string().openapi({ example: "Cardiology" }),
    profilePicture: z.string().url().optional(),
    about: z.string().optional(),
    authId: z.string().uuid().optional(),
  })
  .openapi("userSchema");
