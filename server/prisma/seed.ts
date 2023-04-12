import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  const password = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@email.com' },
    update: {},
    create: {
      email: 'admin@email.com',
      firstName: 'Thales',
      lastName: 'Admin',
      password,
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
