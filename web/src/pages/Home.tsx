import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'

function Home (): JSX.Element {
  const data = { id: 2, name: 'Base Fenty Beuty', description: "Maquiagem à prova d'água para você arrasar nos bailes tudo", price: 200.95 }
  return (
    <div className="w-full">
      <Header />
      <Slider />
      <h2 className='font-semibold text-2xl ml-20 py-10'>Produtos que você só encontra aqui</h2>
      <section className='flex gap-5 max-w-7xl mx-auto flex-wrap justify-center'>
        {[data, data, data, data, data, data, data, data].map((product) => {
          return <ProductCard key={product.id} {...product}/>
        })}
      </section>
    </div>
  )
}

export default Home
