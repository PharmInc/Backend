import { z, createRoute } from "@hono/zod-openapi";
import { userExperienceSchema } from "@db/index";

export const getUserExperience = createRoute({
  method: "get",
  path: "/user/experience",
  description: "Get all user experience entries",
  tags: ["UserExperience"],
  responses: {
    200: {
      description: "Experience records found",
      content: {
        "application/json": {
          schema: z.array(userExperienceSchema),
        },
      },
    },
    404: { description: "No experience records found" },
  },
});

export const getUserExperienceById = createRoute({
  method: "get",
  path: "/user/experience/{id}",
  description: "Get all experience entries by user ID",
  tags: ["UserExperience"],
  request: {
    params: z.object({
      id: z.string().uuid(),
    }),
  },
  responses: {
    200: {
      description: "Experience records found for user",
      content: {
        "application/json": {
          schema: z.array(userExperienceSchema),
        },
      },
    },
    404: { description: "No experience records found for user" },
  },
});
