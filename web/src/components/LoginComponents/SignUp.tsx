import React, { useState } from 'react'
import { insertMaskInPhone } from '../../common/helper/phoneMask'
import type { IFormSignUp } from '../../interfaces/form.interface'
import { formSignUpSchema } from '../../common/schema/form.schema'

function SignUp (): JSX.Element {
  const [form, setForm] = useState<IFormSignUp>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  })

  function handleInputChange ({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const data = formSignUpSchema.parse(form)
    console.log(data)
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="firstName"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Nome
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          id="firstName"
          name="firstName"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="Nome"
          required
          value={form.firstName}
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Sobrenome
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="lastName"
          id="lastName"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="Sobrenome"
          required
          value={form.lastName}
        />
      </div>
      <div>
        <label
          htmlFor="phoneNumber"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Telefone
        </label>
        <input
          onChange={handleInputChange}
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="DDD + Telefone"
          required
          value={insertMaskInPhone(form.phoneNumber)}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="Email"
          required
          value={form.email}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Senha
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          required
          value={form.password}
        />
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Confirmar senha
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          name="confirmPassword"
          id="confirm-password"
          placeholder="••••••••"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          required
          value={form.confirmPassword}
        />
      </div>
      <button
        type="submit"
        className="hover:bg-primary-700 w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Cadastrar
      </button>
    </form>
  )
}

export default SignUp
