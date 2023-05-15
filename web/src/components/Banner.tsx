import React from 'react'

function Banner (): JSX.Element {
  return (
    <div className='flex flex-col bg-banner-img h-[400px] bg-center w-2/3 mx-auto mt-20 text-center items-center pt-20 bg-cover rounded-lg shadow-sm justify-between'>
      <h1 className='text-slate-50 font-bold text-3xl drop-shadow-xl shadow-black max-sm:text-2xl'>Toda nossa linha de makes com até 20% de desconto!</h1>
      <button className='bg-slate-50 p-2 shadow-md font-bold rounded-sm hover:shadow-xl hover:scale-105 transform transition duration-500 mt-12'>Saiba mais</button>
      <span className='text-xs text-slate-50 self-start bottom-1'>*Promoção válida até durar o estoque</span>
    </div>
  )
}

export default Banner
