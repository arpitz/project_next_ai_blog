import { PrismaClient } from "@prisma/client";

let prism: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prism = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prism = (global as any).prisma;
}

export const prisma = prism;
