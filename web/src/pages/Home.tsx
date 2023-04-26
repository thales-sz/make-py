import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'

function Home (): JSX.Element {
  return (
    <div className='w-full'>
      <Header />
      <Slider />
      <div className='h-screen'>Content</div>
    </div>
  )
}

export default Home
