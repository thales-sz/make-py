import { z } from 'zod'

const userSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  role: z.literal('USER').optional(),
  password: z.string().min(6, 'Password must be at least 6 characters long')
})

const addressSchema = z.object({
  address: z.string(),
  cep: z.number().min(8)
})

const userSignIn = z.object({
  email: z.string().email(),
  password: z.string()
})

export { userSchema, userSignIn, addressSchema }
