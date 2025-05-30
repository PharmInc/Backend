import { z, createRoute } from "@hono/zod-openapi";
import { authSchema } from "./models";

export const login = createRoute({
  method: "post",
  path: "/login",
  tags: ["Auth"],
  description:
    "Responds with the JWT access token. Can be accessed unauthenticated.",
  request: {
    body: {
      content: {
        "application/json": {
          schema: authSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "User logged in successfully",
      content: {
        "application/json": {
          schema: z.object({
            token: z.string().openapi({
              example:
                "eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTczNTE0MDk3NiwiaWF0IjoxNzM1MTQwOTc2fQ",
            }),
            userId: z
              .string()
              .openapi({ example: "c9d2841e-7696-4360-bce4-9f9f3e2469cd" }),
          }),
        },
      },
    },
    403: {
      description: "Invalid password",
    },
    404: {
      description: "User not found",
    },
    500: {
      description: "JWT secret not set",
    },
  },
});

export const register = createRoute({
  method: "post",
  path: "/register",
  tags: ["Auth"],
  description: "Registers a user account. Can be accessed unauthenticated.",
  request: {
    body: {
      content: {
        "application/json": {
          schema: authSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "User registered successfully",
    },
    409: {
      description: "User already exists",
    },
    500: {
      description: "JWT secret not set",
    },
  },
});
