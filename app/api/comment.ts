"use server";
import "server-only";

import { PrismaClient } from "@prisma/client";
import { verifyCaptchaToken } from "@/utils/captcha";

const prisma = new PrismaClient();

//TODO: Create server action to submit a comment

export default async function comment(message: string, token: string | null) {
  // Check if token is provided
  if (!token) {
    return { error: "No token provided" };
  }

  try {
    // Verify the reCAPTCHA token
    const captchaData = await verifyCaptchaToken(token);

    // Check if reCAPTCHA verification was unsuccessful
    if (!captchaData || !captchaData.success) {
      return { error: "Captcha verification failed" };
    }

    // Proceed to create the comment if captcha is successful
    const newComment = await prisma.comment.create({
      data: { content: message },
    });
    return newComment;
  } catch (error) {
    console.error("Error in comment submission:", error);
    return { error: "Failed to submit comment" };
  }
}
