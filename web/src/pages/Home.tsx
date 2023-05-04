import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

function Home (): JSX.Element {
  const data = {
    id: 2,
    name: 'Base Fenty Beuty',
    description: "Maquiagem à prova d'água para você arrasar nos bailes tudo",
    price: 200.95
  }
  return (
    <div className="w-full">
      <Header />
      <Slider />
      <h2 className="ml-20 py-10 text-2xl font-semibold">
        Produtos que você só encontra aqui
      </h2>
      <section className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
        {[data, data, data, data, data, data, data, data].map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </section>
      <Footer />
    </div>
  )
}

export default Home
