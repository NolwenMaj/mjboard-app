"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/repositories/prisma";
import { getServerSession } from "next-auth";

export const postJournal = async ({
  responses,
}: {
  responses: { [key: string]: string };
}) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("No session");
  }

  const userEmail = session.user?.email;
  if (!userEmail) {
    throw new Error("User email not found in session");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  if (user === null) return;
  const newJournal = await prisma.journal.create({
    data: {
      userId: user.id,
    },
  });

  const responsePromises = Object.entries(responses).map(
    ([questionId, content]) =>
      prisma.response.create({
        data: {
          content,
          journalId: newJournal.id,
          questionId: parseInt(questionId),
        },
      })
  );

  await Promise.all(responsePromises);
};
