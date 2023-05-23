import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './pages/DashboardPage'
import Product from './pages/Product'

import './styles/main.css'

function App (): JSX.Element {
  return (
    <main className="flex min-h-full flex-col bg-stone-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </main>
  )
}

export default App
