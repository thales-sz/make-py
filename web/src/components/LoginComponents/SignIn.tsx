import React from 'react'

function SignIn (): JSX.Element {
  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {

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
          type="email"
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
          type="password"
          id="password"
          placeholder="••••••••"
          className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-slate-700"
              required={false}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500">
              Lembre-se de mim
            </label>
          </div>
        </div>
        <a
          href="#"
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
    </form>
  )
}

export default SignIn
