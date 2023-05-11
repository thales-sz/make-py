import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

function Header (): JSX.Element {
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderBlack(true)
      return
    }
    setHeaderBlack(false)
  })

  const token = localStorage.getItem('user')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }

  const { isSuccess } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/auth/token', { headers })
      return data as boolean
    },
    retry: 0,
    refetchOnWindowFocus: false
  })

  return (
    <header
      className={`${
        !headerBlack ? 'bg-transparent' : 'bg-slate-900'
      } fixed z-10 flex max-h-40 w-full flex-col bg-gradient-to-b from-black to-transparent font-bold text-slate-100 hover:bg-slate-900`}
    >
      <section className="mt-3 flex justify-between font-semibold">
        <nav className="invisible mt-7 ml-2 w-0 font-thin md:visible md:w-44">
          <span>by Pyetra Almeida</span>
        </nav>

        <Link to="/" className="mt-7 h-fit pb-2 font-ace-sc tracking-widest max-sm:text-2xl md:text-4xl">
          MAKEPY
        </Link>

        <nav className="mr-3 mt-7 flex justify-center gap-4 text-center max-sm:text-base md:w-44">
          {(isSuccess ?? false) ? <Link to="/login">Sair</Link> : <Link to="/login">Entrar</Link>}
          <Link to="/cart">
            Carrinho
            </Link>
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
