import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
import { local } from '../../api/axiosInstance'

function Header (): JSX.Element {
  const navigate = useNavigate()
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)
  const [logged, setLogged] = useState<boolean>(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderBlack(true)
      return
    }
    setHeaderBlack(false)
  })

  useEffect(() => {
    const token = localStorage.getItem('user')

    if (token === null || token === '') { setLogged(false); return }

    const headers = {
      Authorization: `Bearer ${token}`
    }

    local.get('/auth/token', { headers })
      .then((res) => {
        if (res.status === 202) { setLogged(true); return }
        setLogged(false)
      })
      .catch(() => { setLogged(false) })
  }, [])

  function handleSignOutButtonClick (): void {
    setLogged(false)
    localStorage.setItem('user', '')
    navigate('/')
  }

  return (
    <header
      className={`${
        !headerBlack ? 'bg-transparent' : 'bg-slate-900'
      } fixed z-10 flex max-h-40 w-full flex-col bg-gradient-to-b max-sm:max-h-30 from-black to-transparent font-bold text-slate-100 hover:bg-slate-900`}
    >
      <section className="flex justify-between font-semibold h-fit max-sm:h-20 max-md:h-20">
        <div className='h-20 w-44 max-sm:w-20'/>
        <Link to="/" className="mt-6 font-ace-sc tracking-widest max-sm:text-2xl text-4xl">
          MAKEPY
        </Link>
        <nav className="mr-3 mt-7 flex justify-center gap-4 text-center max-sm:text-base md:w-44">
          {(logged ?? false)
            ? <Dropdown handleSignOutButtonClick={handleSignOutButtonClick}/>
            : <Link to="/login" className='hover:underline'>Entrar</Link>}
          <Link to="/cart" className='hover:underline'>
            Carrinho
            </Link>
        </nav>
      </section>
      <nav className="mx-auto flex gap-2 pb-3 text-base font-semibold text-slate-100">
        <a className="border-r border-slate-100 pr-2 hover:cursor-pointer hover:underline">
          BOCA
        </a>
        <a className="border-r border-slate-100 pr-2 hover:cursor-pointer hover:underline">
          OLHOS
        </a>
        <a className="border-r border-slate-100 pr-2 hover:cursor-pointer hover:underline">
          PELE
        </a>
        <a className="hover:cursor-pointer hover:underline">ACESSÓRIOS</a>
      </nav>
    </header>
  )
}

export default Header
