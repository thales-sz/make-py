import React from 'react'

import './styles/main.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

function App (): JSX.Element {
  return (
    <main className='flex flex-col h-screen bg-slate-700'>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/checkout" element={ <Checkout /> } />
      </Routes>
    </main>
  )
}

export default App
