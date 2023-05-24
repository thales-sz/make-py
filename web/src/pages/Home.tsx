import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { useQuery } from 'react-query'
import { type IProduct } from '../interfaces/product.interface'
import Loading from '../components/Loading'
import { CgDanger } from 'react-icons/cg'
import Banner from '../components/Banner'
import Pagination from '../components/Pagination'
import { local } from '../api/axiosInstance'

function Home (): JSX.Element {
  const { data, isFetching, isError } = useQuery({
    queryFn: async () => {
      const { data } = await local.get('/products')
      return data as IProduct[]
    },
    retry: 0,
    refetchOnWindowFocus: false
  })

  return (
    <div className="w-full">
      <Header />
      <Slider />
      <Banner />
      <h2 className="ml-20 py-10 text-2xl font-semibold">
        Produtos que você só encontra aqui
      </h2>
      <section className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
        {isFetching
          ? <Loading absolute={false}/>
          : <>
            {data?.map((product) => {
              return <ProductCard key={product?._id} {...product} />
            })}
            <Pagination lastIndex={2}/>
          </>
          }
      </section>
      {isError
        ? <div className='flex text-red-500 gap-2 mx-auto'>
          <CgDanger width={10} color='red'/>
            Ocorreu um erro!
          </div>
        : null}
      <Footer />
    </div>
  )
}

export default Home
