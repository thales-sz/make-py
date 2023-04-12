import { PrismaClient, Role } from '@prisma/client';

import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@email.com' },
    update: {},
    create: {
      email: 'admin@email.com',
      firstName: 'Thales',
      lastName: 'Admin',
      password: process.env.ADMIN_PASSWORD,
      phoneNumber: '+5524123456789',
      role: Role.ADMIN,
    },
  });
  console.log({ admin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
