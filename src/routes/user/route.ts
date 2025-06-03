import { z, createRoute } from "@hono/zod-openapi";
import { userSchema, createUserSchema } from "@db/index";

export const createUser = createRoute({
  method: "post",
  path: "/",
  tags: ["User"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createUserSchema,
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    201: {
      description: "User created",
    },
    400: { description: "Bad request" },
    404: { description: "Auth not found" },
  },
});

export const getUser = createRoute({
  method: "get",
  path: "/{id}",
  description: "Get user by ID",
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
          schema: userSchema.extend({ id: z.string().uuid() }),
        },
      },
    },
    404: { description: "User not found" },
  },
});

export const updateUser = createRoute({
  method: "put",
  path: "/{id}",
  tags: ["User"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
    body: {
      content: {
        "application/json": {
          schema: userSchema.partial(),
        },
      },
    },
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "User updated" },
    404: { description: "User not found" },
  },
});

export const deleteUser = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["User"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "User deleted" },
    404: { description: "User not found" },
  },
});
