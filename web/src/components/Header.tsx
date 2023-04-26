import React, { useState } from 'react'

function Header (): JSX.Element {
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderBlack(true); return
    } setHeaderBlack(false)
  })

  return (
    <header className={`${!headerBlack ? 'bg-color-black' : 'bg-black bg-gradient-to-b from-black to-transparent'} fixed top flex flex-col hover:bg-black bg-gradient-to-b from-black to-transparent text-slate-50 z-10 w-full font-bold`}>
      <section className='flex justify-between mt-3 font-semibold'>
        <nav className='flex gap-4 justify-center text-center ml-5 font-extralight text-sm w-60 mt-7'>
          <span>by Pyetra Almeida</span>
        </nav>

        <h1 className='sm:text-xl md:text-4xl font-ace-sc'>M A K E P Y</h1>

        <nav className='flex gap-4 justify-center text-center mr-5 w-60 mt-7'>
          <a>Sign In</a>
          <a>Cart</a>
          <button className='h-0'>Search</button>
        </nav>
      </section>
      <nav className='flex text-red-100 gap-2 mx-auto text-base py-2 font-semibold'>
        <a className='hover:cursor-pointer border-r border-slate-300 pr-2'>PELE</a>
        <a className='hover:cursor-pointer border-r border-slate-300 pr-2'>OLHOS</a>
        <a className='hover:cursor-pointer border-r border-slate-300 pr-2'>BOCA</a>
        <a className='hover:cursor-pointer'>ACESSÓRIOS</a>
      </nav>
    </header>
  )
}

export default Header
