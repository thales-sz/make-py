import React from 'react'

import './styles/main.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'

function App (): JSX.Element {
  return (
    <main className="flex h-full flex-col bg-stone-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

export default App
