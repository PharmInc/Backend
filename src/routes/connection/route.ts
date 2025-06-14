import { connectionSchema } from "@db/index";
import { z, createRoute } from "@hono/zod-openapi";

export const createConnection = createRoute({
  method: "post",
  path: "/{id}",
  tags: ["Connection"],
  request: {
    params: z.object({
      id: z
        .string()
        .uuid()
        .openapi({ example: "f91d36c5-3020-4178-b82e-8be298bd712c" }),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    201: { description: "Connection created" },
    400: { description: "Invalid request" },
    404: { description: "User or connector not found" },
  },
});

export const deleteConnection = createRoute({
  method: "delete",
  path: "/{id}",
  tags: ["Connection"],
  request: {
    params: z.object({
      id: z
        .string()
        .uuid()
        .openapi({ example: "f91d36c5-3020-4178-b82e-8be298bd712c" }),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    204: { description: "Connection deleted" },
    404: { description: "Connection not found" },
  },
});

export const getConnection = createRoute({
  method: "get",
  path: "/",
  description: "Get all connections",
  tags: ["Connection"],
  security: [{ Bearer: [] }],
  responses: {
    200: {
      description: "Connections found",
      content: {
        "application/json": {
          schema: z.array(connectionSchema),
        },
      },
    },
    404: { description: "No connections found" },
  },
});

export const acceptConnection = createRoute({
  method: "patch",
  path: "/{id}/accept",
  description:
    "Accept a connection via the user id of the person who is trying to connect with me",
  tags: ["Connection"],
  request: {
    params: z.object({
      id: z
        .string()
        .uuid()
        .openapi({ example: "f91d36c5-3020-4178-b82e-8be298bd712c" }),
    }),
  },
  security: [{ Bearer: [] }],
  responses: {
    200: { description: "Connection accepted" },
    400: { description: "Invalid request" },
    404: { description: "Connection not found" },
  },
});

// Get accepted connections
export const getAcceptedConnections = createRoute({
  method: "get",
  path: "/accepted",
  description: "Get all accepted connections",
  tags: ["Connection"],
  security: [{ Bearer: [] }],
  responses: {
    200: {
      description: "Accepted connections found",
      content: {
        "application/json": {
          schema: z.array(connectionSchema),
        },
      },
    },
    404: { description: "No accepted connections found" },
  },
});
