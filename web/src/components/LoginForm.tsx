import React, { useState } from 'react'
import SignIn from './LoginComponents/SignIn'
import SignUp from './LoginComponents/SignUp'
import { useForm } from 'react-hook-form'

function LoginForm (): JSX.Element {
  const [haveAccount, setHaveAccount] = useState(true)
  const { register } = useForm()
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-auto mt-48 mb-28">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
                      {haveAccount ? 'Entre na sua conta' : 'Cadastro' }
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                      {haveAccount ? <SignIn register={register} /> : <SignUp />}
                      {haveAccount
                        ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 accent-slate-700" required={false}/>
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500">Lembre-se de mim</label>
                              </div>
                          </div>
                          <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Esqueceu a sua senha?</a>
                      </div>
                          )
                        : null }
                      <button type="submit" className="w-full text-white bg-slate-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{haveAccount ? 'Entrar' : 'Cadastrar' }</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          {haveAccount ? 'Não' : 'Já' } possui uma conta? <a onClick={() => { setHaveAccount(!haveAccount) }} className="font-medium text-primary-600 hover:underline text-blue-400">{haveAccount ? 'Cadastre-se' : 'Faça login' }</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
  </section>
  )
}

export default LoginForm
