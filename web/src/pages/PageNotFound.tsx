import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function PageNotFound (): JSX.Element {
  const navigate = useNavigate()
  return (
    <div className='h-screen'>
      <Header />
      <div className="text-center items-center flex flex-col p-10 my-40">
      <h1 className='text-5xl font-extrabold uppercase'>404 - Página não encontrada!</h1>
      <div className='flex items-center text-center w-fit'>
        <svg fill="#000000" width="200px" height="200px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M520.741 163.801a10.234 10.234 0 00-3.406-3.406c-4.827-2.946-11.129-1.421-14.075 3.406L80.258 856.874a10.236 10.236 0 00-1.499 5.335c0 5.655 4.585 10.24 10.24 10.24h846.004c1.882 0 3.728-.519 5.335-1.499 4.827-2.946 6.352-9.248 3.406-14.075L520.742 163.802zm43.703-26.674L987.446 830.2c17.678 28.964 8.528 66.774-20.436 84.452a61.445 61.445 0 01-32.008 8.996H88.998c-33.932 0-61.44-27.508-61.44-61.44a61.445 61.445 0 018.996-32.008l423.002-693.073c17.678-28.964 55.488-38.113 84.452-20.436a61.438 61.438 0 0120.436 20.436zM512 778.24c22.622 0 40.96-18.338 40.96-40.96s-18.338-40.96-40.96-40.96-40.96 18.338-40.96 40.96 18.338 40.96 40.96 40.96zm0-440.32c-22.622 0-40.96 18.338-40.96 40.96v225.28c0 22.622 18.338 40.96 40.96 40.96s40.96-18.338 40.96-40.96V378.88c0-22.622-18.338-40.96-40.96-40.96z" className="text-center m-auto"/></svg>
      </div>
      <h2 className='text-xl mb-4'>Você não deveria está aqui!</h2>
      <button type='button' className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none"onClick={() => { navigate('/') }}>Voltar à página inicial</button>
    </div>
      <Footer />
    </div>
  )
}

export default PageNotFound
