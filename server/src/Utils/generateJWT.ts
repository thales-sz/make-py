import Jwt from 'jsonwebtoken'
import type { User } from '@prisma/client'
import 'dotenv/config'

const { JWT_SECRET }: Jwt.JwtPayload = process.env

export default function generateJWT (user: User): string {
  const payload: Jwt.JwtPayload = {
    email: user.email,
    first_name: user.first_name,
    role: user.role
  }

  const config: Jwt.SignOptions = {
    algorithm: 'HS256'
  }

  const token = Jwt.sign(payload, JWT_SECRET, config)

  return token
}
