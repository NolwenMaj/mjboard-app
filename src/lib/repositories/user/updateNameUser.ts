import prisma from "@/lib/repositories/prisma";

const updateUserName = async (currentEmail: string, newName: string) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { email: currentEmail },
      data: { name: newName },
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Erreur serveur");
  }
};

export default updateUserName;
