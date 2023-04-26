import React, { useState } from 'react'

function Header (): JSX.Element {
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderBlack(true); return
    } setHeaderBlack(false)
  })

  return (
    <header className={`${!headerBlack ? 'bg-color-black' : 'bg-black bg-gradient-to-b from-black to-transparent'} fixed top flex flex-col hover:bg-black bg-gradient-to-b from-black to-transparent text-slate-100 z-10 w-full font-bold max-h-40`}>
      <section className='flex justify-between mt-3 font-semibold'>
        <nav className='md:visible invisible md:w-44 w-0 mt-7 font-thin ml-2'>
          <span>by Pyetra Almeida</span>
        </nav>

        <h1 className='md:text-4xl font-ace-sc max-sm:text-2xl h-fit mt-7 pb-2'>M A K E P Y</h1>

        <nav className='flex gap-4 justify-center text-center mr-5 w-44 mt-7'>
          <a>SignIn</a>
          <a>Cart</a>
          <button className='h-0'>Search</button>
        </nav>
      </section>
      <nav className='flex text-slate-100 gap-2 mx-auto text-base font-semibold pb-2'>
        <a className='hover:cursor-pointer border-r border-slate-100 pr-2'>PELE</a>
        <a className='hover:cursor-pointer border-r border-slate-100 pr-2'>OLHOS</a>
        <a className='hover:cursor-pointer border-r border-slate-100 pr-2'>BOCA</a>
        <a className='hover:cursor-pointer'>ACESSÓRIOS</a>
      </nav>
    </header>
  )
}

export default Header
