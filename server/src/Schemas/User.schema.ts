import type { User } from '@prisma/client'
import { z } from 'zod'

export default class Validation {
  protected userSchema

  constructor () {
    this.userSchema = z.object({
      id: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      email: z.string(),
      role: z.literal('USER'),
      password: z.string()
    })
  }

  public user (body: User): User {
    return this.userSchema.parse(body)
  }
}
