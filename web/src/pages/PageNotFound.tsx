import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

function PageNotFound (): JSX.Element {
  return (
    <div>
      <Header />
      <Slider />
      <div className='text-center p-10'>
        <h1 className='text-6xl font-ace-sc uppercase'>404 - Página não encontrada!</h1>
      </div>
      <Footer />
    </div>
  )
}

export default PageNotFound
