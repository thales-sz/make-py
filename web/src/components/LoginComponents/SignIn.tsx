import React from 'react'

function SignIn ({ register }: any): JSX.Element {
  return (
    <div className='space-y-4 md:space-y-6'>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="seu-email@email.com" required {...register('email')}/>
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
        <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required {...register('password')}/>
      </div>
    </div>
  )
}

export default SignIn
