import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import updateUserName from "@/lib/repositories/user/updateNameUser";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json(
      { message: "Action non autorisée." },
      { status: 401 }
    );
  }

  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ message: "Nom nécessaire." }, { status: 400 });
  }

  try {
    const updatedUser = await updateUserName(session.user.email, name);
    return NextResponse.json({ user: updatedUser });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
