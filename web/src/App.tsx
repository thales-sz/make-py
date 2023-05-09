import React from 'react'

import './styles/main.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/Dashboard'

function App (): JSX.Element {
  return (
    <main className="flex min-h-full flex-col bg-stone-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

export default App
