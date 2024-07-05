import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/serverAction/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json(
      { message: "Action non authorisée." },
      { status: 401 }
    );
  }

  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ message: "Nom nécessaire." }, { status: 400 });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { name },
    });

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
