import z from 'zod'

const emailRegex: RegExp = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+?$/i

export const formSignUpSchema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().nonempty().email('Formato de e-mail inválido').regex(emailRegex),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').max(16).nonempty(),
  confirmPassword: z.string().nonempty(),
  phoneNumber: z.string().nonempty()
})
