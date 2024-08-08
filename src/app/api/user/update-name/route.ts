import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import updateUserName from "@/lib/repositories/user/updateNameUser";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { pseudo } = await req.json();
  if (!pseudo) {
    return NextResponse.json(
      { error: "Invalid input : missing new pseudo" },
      { status: 400 }
    );
  }

  try {
    const updatedUser = await updateUserName(session.user.email, pseudo);
    return NextResponse.json({ user: updatedUser });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
