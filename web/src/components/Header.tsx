import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header (): JSX.Element {
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)
  const navigate = useNavigate()

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderBlack(true)
      return
    }
    setHeaderBlack(false)
  })

  return (
    <header
      className={`${
        !headerBlack
          ? 'bg-transparent'
          : 'bg-slate-900'
      } fixed z-10 flex max-h-40 w-full flex-col bg-gradient-to-b from-black to-transparent font-bold text-slate-100 hover:bg-slate-900`}
    >
      <section className="mt-3 flex justify-between font-semibold">
        <nav className="invisible mt-7 ml-2 w-0 font-thin md:visible md:w-44">
          <span>by Pyetra Almeida</span>
        </nav>

        <h1 className="mt-7 h-fit pb-2 font-ace-sc tracking-widest max-sm:text-2xl md:text-4xl">
          MAKEPY
        </h1>

        <nav className="mr-3 mt-7 flex justify-center gap-2 text-center max-sm:text-sm md:w-44">
          <a onClick={() => { navigate('/login') }} className='hover:cursor-pointer'>Entrar</a>
          <a>Carrinho</a>
          <button className="h-fit">Procurar</button>
        </nav>
      </section>
      <nav className="mx-auto flex gap-2 pb-2 text-base font-semibold text-slate-100">
        <a className="border-r border-slate-100 pr-2 hover:cursor-pointer">
          PELE
        </a>
        <a className="border-r border-slate-100 pr-2 hover:cursor-pointer">
          OLHOS
        </a>
        <a className="border-r border-slate-100 pr-2 hover:cursor-pointer">
          BOCA
        </a>
        <a className="hover:cursor-pointer">ACESSÓRIOS</a>
      </nav>
    </header>
  )
}

export default Header
