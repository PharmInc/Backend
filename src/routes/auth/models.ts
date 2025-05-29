import { z } from "@hono/zod-openapi";

export const authSchema = z
  .object({
    email: z.string().email().openapi({ example: "example@example.com" }),
    password: z.string().openapi({ example: "password" }),
  })
  .openapi("authSchema");
