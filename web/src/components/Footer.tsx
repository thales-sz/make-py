import React from 'react'

function Footer (): JSX.Element {
  return (
    <footer className="bottom-0 z-10 mt-8 flex w-full flex-col justify-center bg-gradient-to-t from-black to-slate-800 p-7 text-left text-slate-100">
      <section className="mx-auto flex gap-9">
        <nav className="flex flex-col gap-1">
          <h3 className="uppercase text-xl mb-2">Quem somos</h3>
          <a className='hover:underline'>Sobre nós</a>
          <a className='hover:underline'>Nossa cultura</a>
          <a className='hover:underline'>Privacidade e Cookies</a>
        </nav>
        <nav className="flex flex-col gap-1">
          <h3 className="uppercase text-xl mb-2">Nos encontre em</h3>
          <a href="https://www.facebook.com/" className='hover:underline'>Facebook</a>
          <a href="https://www.instagram.com/" className='hover:underline'>Instagram</a>
          <a href="https://www.twitter.com/" className='hover:underline'>Twitter</a>
        </nav>
        <nav className="flex flex-col gap-1">
          <h3 className="uppercase text-xl mb-2">Precisa de ajuda?</h3>
          <a href="https://make-py.vercel.app/faq" className='hover:underline'>Perguntas frequentes</a>
          <a href="https://make-py.vercel.app/contact" className='hover:underline'>Contato</a>
          <a href="https://make-py.vercel.app/payment-options" className='hover:underline'>
            Opções de pagamento
          </a>
        </nav>
      </section>
      <span className='text-center mt-8'>All rights reserved © 2023 <a href='https://www.linkedin.com/in/thales-sz/' className='hover:underline' target="_blank" rel='noreferrer'>Thales Chagas™</a></span>
    </footer>
  )
}

export default Footer
