import { type Product } from '@prisma/client'

const make: Product = {
  id: '78421',
  price: 85.5,
  created_at: new Date(),
  name: 'Base Make Py',
  description: 'Base tipo vintage para sua pele brilhar'
}

export const getAll = {
  response: [make, make, make]
}
