"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/serverAction/prisma";
import { getServerSession } from "next-auth";

export default async function deleteUser() {
  const session = await getServerSession(authOptions);
  let deleteUser;
  if (session?.user?.email)
    return (deleteUser = await prisma.user.delete({
      where: { email: session.user.email },
    }));
}
