import React, { useState } from 'react'
import { insertMaskInPhone } from '../../common/helper/phoneMask'
import type { IFormSignIn, IFormSignUp, IUser } from '../../interfaces/form.interface'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { formSignUpSchema } from '../../common/schema/form.schema'
import { CgDanger } from 'react-icons/cg'
import Loading from '../Loading'
import { local } from '../../api/axiosInstance'

function SignUp (): JSX.Element {
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [form, setForm] = useState<IFormSignUp>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  })

  function handleInputChange ({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const singUp = useMutation({
    mutationFn: async (user: IFormSignUp): Promise<IUser> => {
      const { data } = await local.post('/users/signup', user)
      return data as IUser
    },
    onError: async (error: any) => {
      if (error.request.status === 409) {
        setLoading(false)
        setErrorMessage('Este email já está em uso')
      }
    }
  })

  const singIn = useMutation({
    mutationFn: async (user: IFormSignIn) => {
      return await local.post('/auth/signin', user)
    }
  })

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    try {
      setLoading(true)
      formSignUpSchema.parse(form)
    } catch (error: any) {
      setLoading(false)
      setErrorMessage(JSON.parse(error.message)[0].message)
    } finally {
      await singUp.mutateAsync(form)
      const { data } = await singIn.mutateAsync({ email: form.email, password: form.password, remember: false })
      if (!singUp.isError) localStorage.setItem('user', data.token)
      setLoading(false)
      navigate('/')
    }
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
          maxLength={15}
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
      <button
        type="submit"
        className="hover:bg-primary-700 w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
        disabled={loading}
      >
        Cadastrar
      </button>
      {loading
        ? <Loading absolute={true}/>
        : singUp.isError || singIn.isError
          ? <div className='flex text-red-500 gap-2'>
          <CgDanger width={10} color='red'/>
        {errorMessage}
        </div>
          : null}
    </form>
  )
}

export default SignUp
