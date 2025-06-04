FROM node:23-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml drizzle.config.ts ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm run build

FROM node:23-alpine

WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --prod

EXPOSE 3000

CMD ["node", "dist/src/index.js"]
