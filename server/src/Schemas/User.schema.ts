import { z } from 'zod'

const userSchema = z.object({
  id: z.string().optional(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  role: z.literal('USER').optional(),
  password: z.string()
})

const userSignIn = z.object({
  email: z.string().email(),
  password: z.string()
})
export { userSchema, userSignIn }
