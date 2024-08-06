import { User } from "@prisma/client";
import prisma from "../prisma";

export const getUserByEmail = async (
  sessionEmail: string
): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: sessionEmail,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Error fetching user by email");
  }
};
