import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import ProductDetails from '../components/ProductDetails'

function Product (): JSX.Element {
  return (
    <section>
      <Header />
      <ProductDetails />
      <Footer />
    </section>
  )
}

export default Product
