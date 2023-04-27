import React from 'react'

function SignUp (): JSX.Element {
  return (
    <div className='space-y-4 md:space-y-6'>
      <div>
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">Nome</label>
        <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Fulano" required/>
      </div>
      <div>
        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Sobrenome</label>
        <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Makepy" required/>
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 ">Telefone</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="+55 (XX) 999999999" required/>
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="seu-email@email.com" required/>
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required/>
      </div>
      <div>
        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirmar senha</label>
        <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required/>
      </div>
    </div>
  )
}

export default SignUp
