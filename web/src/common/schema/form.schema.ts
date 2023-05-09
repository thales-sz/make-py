import z from 'zod'

const emailRegex: RegExp = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+?$/i

export const formSignUpSchema = z.object({
  firstName: z.string().nonempty().min(2).transform(firstName => {
    return firstName[0].toUpperCase().concat(firstName.substring(1))
  }),
  lastName: z.string().nonempty().transform(lastName => {
    return lastName.trim().split(' ').map(word => {
      return word[0].toUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  email: z.string().nonempty().email('Formato de e-mail inválido').regex(emailRegex),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').max(16, 'A senha deve ter no máximo 16 caracteres').nonempty(),
  phoneNumber: z.string().nonempty()
})

export const formSignInSchema = z.object({
  email: z.string().nonempty().email('Formato de e-mail inválido').regex(emailRegex),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').max(16, 'A senha deve ter no máximo 16 caracteres').nonempty(),
  remember: z.boolean()
})
