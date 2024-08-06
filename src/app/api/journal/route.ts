import { deleteJournalById, postJournal } from "@/lib/repositories";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { responses } = await req.json();

  if (!responses) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const newJournal = await postJournal(responses);
    return NextResponse.json(
      { message: "Journal posté avec succès." },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { journalId } = await req.json();

  if (!journalId) {
    return NextResponse.json(
      { error: "Journal ID nécessaire." },
      { status: 400 }
    );
  }

  try {
    await deleteJournalById(parseInt(journalId));
    return NextResponse.json(
      { message: "Journal supprimé avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting journal:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
