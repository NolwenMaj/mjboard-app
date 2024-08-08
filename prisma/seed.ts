import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

const dummyPasswordHash = bcrypt.hashSync("dummyPassword", 10);

const users = [
  {
    id: 1,
    email: "user1@prisma.io",
    passwordHash: dummyPasswordHash,
  },
  {
    id: 2,
    email: "user2@prisma.io",
    passwordHash: dummyPasswordHash,
  },
  {
    id: 3,
    email: "user3@prisma.io",
    passwordHash: dummyPasswordHash,
  },
];

const questions = [
  {
    id: 1,
    content: "Comment je me suis sentie aujourd'hui ?",
  },
  {
    id: 2,
    content: "Qu'est ce qui m'a freiné dans mon travail ?",
  },
  {
    id: 3,
    content: "Qu'est ce que je ne veux pas oublier ?",
  },
];

const journals = [
  {
    id: 1,
    userId: 1,
    created_at: "2021-08-01T12:34:56.789Z",
  },
];

const responses = [
  {
    content: "Je me suis sentie bien",
    questionId: 1,
    journalId: 1,
  },
  {
    content: "Je pense qu'il y a eu un problème avec mon travail",
    questionId: 2,
    journalId: 1,
  },
  {
    content: "changer le typage de la fonction getUserByEmail",
    questionId: 3,
    journalId: 1,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  await prisma.user.deleteMany();
  await prisma.question.deleteMany();
  await prisma.journal.deleteMany();
  await prisma.response.deleteMany();
  console.log(`Deleted existing data`);
  for (const u of users) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  for (const q of questions) {
    const question = await prisma.question.create({
      data: q,
    });
    console.log(`Created question with id: ${question.id}`);
  }
  for (const j of journals) {
    const journal = await prisma.journal.create({
      data: j,
    });
    console.log(`Created journal with id: ${journal.id}`);
  }
  for (const r of responses) {
    const response = await prisma.response.create({
      data: r,
    });
    console.log(`Created response with id: ${response.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
