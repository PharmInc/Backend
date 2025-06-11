import { z, createRoute } from "@hono/zod-openapi";
import { userSchema } from "@db/index";

export const getUser = createRoute({
  method: "get",
  path: "/user/",
  description: "Get all users",
  tags: ["User"],
  responses: {
    200: {
      description: "User found",
      content: {
        "application/json": {
          schema: z.array(userSchema),
        },
      },
    },
    404: { description: "User not found" },
  },
});

export const getUserById = createRoute({
  method: "get",
  path: "/user/{id}",
  description: "Get a user by user ID",
  tags: ["User"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "User found",
      content: {
        "application/json": {
          schema: userSchema,
        },
      },
    },
    404: { description: "User not found" },
  },
});
