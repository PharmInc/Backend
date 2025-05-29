import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 as uuidv4 } from "uuid";
import prisma from "../../lib/prisma-client";
import logger from "../../lib/logging-client";
import { createUser, getUser, updateUser, deleteUser } from "./route";

const userRouter = new OpenAPIHono();

userRouter.openapi(createUser, async (ctx) => {
  const data = ctx.req.valid("json");

  try {
    const user = await prisma.user.create({
      data: {
        ...data,
        id: uuidv4(),
      },
    });

    logger.info({ userId: user.id }, "User created");
    return ctx.text("User created", 201);
  } catch (error) {
    logger.error({ error }, "Failed to create user");
    return ctx.text("Failed to create user", 400);
  }
});

userRouter.openapi(getUser, async (ctx) => {
  const { id } = ctx.req.valid("param");

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      UserExperience: true,
      UserEducation: true,
    },
  });

  if (!user) {
    return ctx.text("User not found", 404);
  }

  return ctx.json(user);
});

userRouter.openapi(updateUser, async (ctx) => {
  const { id } = ctx.req.valid("param");
  const data = ctx.req.valid("json");

  try {
    const updated = await prisma.user.update({
      where: { id },
      data,
    });

    logger.info({ userId: updated.id }, "User updated");
    return ctx.text("User updated");
  } catch (error) {
    logger.warn({ error }, "Failed to update user");
    return ctx.text("User not found", 404);
  }
});

userRouter.openapi(deleteUser, async (ctx) => {
  const { id } = ctx.req.valid("param");

  try {
    await prisma.user.delete({
      where: { id },
    });

    logger.info({ userId: id }, "User deleted");
    return ctx.body(null, 204);
  } catch (error) {
    logger.warn({ error }, "Failed to delete user");
    return ctx.text("User not found", 404);
  }
});

export default userRouter;
