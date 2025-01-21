"use server";
import "server-only";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Server actions are for mutating or setting data
//API routes are for getting data
//TODO: Create API route to get comments

export default async function getComments() {
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });
  return comments.reverse();
}
