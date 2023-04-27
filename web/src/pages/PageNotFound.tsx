import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

function PageNotFound (): JSX.Element {
  return (
    <div>
      <Header />
      <Slider />
      <div className='text-center p-10 text-6xl font-ace-sc uppercase'>
        <div className='mb-8'>404</div>
        <h1>Página não encontrada!</h1>
      </div>
      <Footer />
    </div>
  )
}

export default PageNotFound
