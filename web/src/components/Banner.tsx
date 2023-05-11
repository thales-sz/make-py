import React from 'react'

function Banner (): JSX.Element {
  return (
    <div className='flex flex-col bg-banner-img h-[400px] bg-center w-2/3 mx-auto mt-20 items-center text-center p-20 gap-2 bg-cover rounded-md shadow-sm'>
      <h1 className='text-slate-50 font-bold text-4xl drop-shadow-xl max-sm:text-2xl'>Toda nossa linha de maquiagem</h1>
      <p className='text-slate-50 font-bold text-4xl drop-shadow-xl max-sm:text-2xl'> com até 20% de desconto!</p>
      <button className='bg-slate-50 p-2 shadow-md font-bold rounded-sm hover:shadow-xl hover:scale-105 transform transition duration-500 mt-12'>Veja nossa nova linha de bases à prova d&apos;agua</button>
    </div>
  )
}

export default Banner
