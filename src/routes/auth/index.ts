import { OpenAPIHono } from "@hono/zod-openapi";
import { v4 } from "uuid";
import { sign } from "hono/jwt";
import prisma from "./../../lib/prisma-client.js";
import { checkPassword, hashPassword } from "./../../utils/passwords.js";
import { login, register } from "./route.js";
import logger from "../../lib/logging-client.js";

const authRouter = new OpenAPIHono();

authRouter.openapi(login, async (ctx) => {
  const { email, password } = ctx.req.valid("json");

  if (!process.env.JWT_SECRET) {
    logger.error("JWT_SECRET is not set");
    return ctx.text("Internal server error", 500);
  }

  logger.info({ email }, "Login attempt");

  const auth = await prisma.auth.findUnique({
    where: { email },
  });

  if (!auth) {
    logger.warn({ email }, "User not found");
    return ctx.text("User not found", 404);
  }

  const truePassword = await checkPassword(password, auth?.password);

  if (truePassword) {
    const token = await sign(
      {
        userId: auth.id,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2,
      },
      process.env.JWT_SECRET
    );

    logger.info({ userId: auth.id, email }, "Login successful");

    return ctx.json(
      {
        token,
        userId: auth.id,
      },
      200
    );
  } else {
    logger.warn({ email }, "Invalid password attempt");
    return ctx.text("Invalid password", 403);
  }
});

authRouter.openapi(register, async (ctx) => {
  const { email, password } = ctx.req.valid("json");

  if (!process.env.JWT_SECRET) {
    logger.error("JWT_SECRET is not set");
    return ctx.text("Internal server error", 500);
  }

  logger.info({ email }, "Registration attempt");

  const existingAuth = await prisma.auth.findUnique({
    where: { email },
  });

  if (existingAuth) {
    logger.warn({ email }, "User already exists");
    return ctx.text("User already exists", 409);
  }

  const hashedPassword = await hashPassword(password);

  const created = await prisma.auth.create({
    data: {
      id: v4(),
      email,
      password: hashedPassword,
    },
  });

  logger.info({ userId: created.id, email }, "User registered successfully");

  return ctx.text("User registered successfully", 201);
});

export default authRouter;
