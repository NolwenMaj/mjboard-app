import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/repositories/prisma";
import { getUserByEmail } from "@/lib/repositories/user/getUserByEmail";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await getUserByEmail(session.user.email);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const lastJournal = await prisma.journal.findFirst({
      where: { userId: user.id },
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json({ message: lastJournal || null }, { status: 200 });
  } catch (error) {
    console.error("Error fetching last journal:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
