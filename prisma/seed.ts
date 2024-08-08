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
    created_at: "2024-08-01T12:34:56.789Z",
  },
  {
    id: 2,
    userId: 1,
    created_at: "2024-08-02T12:34:56.789Z",
  },
  {
    id: 3,
    userId: 1,
    created_at: "2024-08-03T12:34:56.789Z",
  },
  {
    id: 4,
    userId: 1,
    created_at: "2024-08-04T12:34:56.789Z",
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
    content: "Changer le typage de la fonction getUserByEmail",
    questionId: 3,
    journalId: 1,
  },
  {
    content: "Je ne sais pas ce que je fais",
    questionId: 1,
    journalId: 2,
  },
  {
    content: "J'ai eu trop de réunions",
    questionId: 2,
    journalId: 2,
  },
  {
    content: "Répondre au mail de Pascal",
    questionId: 3,
    journalId: 2,
  },
  {
    content: "Super contente car j'ai appris plein de choses aujourd'hui",
    questionId: 1,
    journalId: 3,
  },
  {
    content: "Je dois améliorer ma productivité en refusant les initerruptions",
    questionId: 2,
    journalId: 3,
  },
  {
    content: "Parler du bugg à Valérie",
    questionId: 3,
    journalId: 3,
  },
  {
    content: "Super stressée car je dois finir mon projet cette semaine",
    questionId: 1,
    journalId: 4,
  },
  {
    content: "La fatigue",
    questionId: 2,
    journalId: 4,
  },
  {
    content: "Prendre des pauses",
    questionId: 3,
    journalId: 4,
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
