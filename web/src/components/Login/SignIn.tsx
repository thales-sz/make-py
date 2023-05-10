import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { type IFormSignIn } from '../../interfaces/form.interface'
import axios from 'axios'
import { formSignInSchema } from '../../common/schema/form.schema'
import { CgDanger } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

function SignIn (): JSX.Element {
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const [form, setForm] = useState<IFormSignIn>({
    email: '',
    password: '',
    remember: false
  })

  function handleInputChange ({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [target.name]: target.name === 'remember' ? target.checked : target.value
    })
  }

  const { mutateAsync, isError } = useMutation({
    mutationFn: async (user: IFormSignIn) => {
      return await axios.post('http://localhost:3000/auth/signin', user)
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const validForm = formSignInSchema.parse(form)
      const { data } = await mutateAsync(validForm)
      if (!isError) localStorage.setItem('user', data.token)
      navigate('/')
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              onChange={handleInputChange}
              id="remember"
              name="remember"
              aria-describedby="remember"
              type="checkbox"
              className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-slate-700"
              required={false}
              checked={form.remember}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500">
              Lembre-se de mim
            </label>
          </div>
        </div>
        <a
          href="/redefine-password"
          className="text-primary-600 text-sm font-medium hover:underline"
        >
          Esqueceu a sua senha?
        </a>
      </div>
      <button
        type="submit"
        className="hover:bg-primary-700 w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Entrar
      </button>
      {isError || error
        ? <div className='flex text-red-500 gap-2'>
          <CgDanger width={10} color='red'/>
        Email ou senha inválidos!
        </div>
        : null}
    </form>
  )
}

export default SignIn
