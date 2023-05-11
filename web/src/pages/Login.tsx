import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/Login/LoginForm'

function Login (): JSX.Element {
  return (
    <section>
      <Header />
      <LoginForm />
      <Footer />
    </section>
  )
}

export default Login
