import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { useQuery } from 'react-query'
import axios from 'axios'
import { type IProduct } from '../interfaces/product.interface'
import Loading from '../components/Loading'
import { CgDanger } from 'react-icons/cg'

function Home (): JSX.Element {
  const { isFetching, isError } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/products')
      return data as IProduct[]
    },
    retry: 0,
    refetchOnWindowFocus: false
  })

  const data = {
    _id: 'das6d4asd531asd1a2s',
    name: 'Base Sephora',
    description: 'Uma base linda',
    price: 450
  }

  return (
    <div className="w-full">
      <Header />
      <Slider />
      <h2 className="ml-20 py-10 text-2xl font-semibold">
        Produtos que você só encontra aqui
      </h2>
      <section className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
        {isFetching
          ? <Loading absolute={false}/>
          : [data, data, data, data, data].map((product) => {
              return <ProductCard key={product?._id} {...product} />
            })}
      </section>
      {isError
        ? <div className='flex text-red-500 gap-2'>
          <CgDanger width={10} color='red'/>
            Ocorreu um erro!
          </div>
        : null}
      <Footer />
    </div>
  )
}

export default Home
