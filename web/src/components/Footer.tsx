import React from 'react'

function Footer (): JSX.Element {
  return (
    <footer className='flex flex-col bottom-0 justify-center w-full z-10 bg-gradient-to-t from-black to-slate-800 text-slate-100 text-left p-7 mt-8'>
      <section className='flex mx-auto gap-6'>
        <nav className='flex flex-col'>
          <h3 className='uppercase'>Nos encontre em</h3>
          <a href='https://www.facebook.com/'>Facebook</a>
          <a href='https://www.instagram.com/'>Instagram</a>
          <a href='https://www.twitter.com/'>Twitter</a>
        </nav>
        <nav className='flex flex-col'>
          <h3 className='uppercase'>Precisa de ajuda?</h3>
          <a href='https://make-py.vercel.app/faq'>Perguntas frequentes</a>
          <a href='https://make-py.vercel.app/contact'>Contato</a>
          <a href='https://make-py.vercel.app/payment-options'>Opções de pagamento</a>
        </nav>
        <nav className='flex flex-col'>
          <h3 className='uppercase'>Sobre a empresa</h3>
          <a>Sobre nós</a>
          <a>Privacidade e Cookies</a>
          <a>Nossa cultura</a>
        </nav>
      </section>
      <span>© 2023 Thales Chagas™</span>
    </footer>
  )
}

export default Footer
