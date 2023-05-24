import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { local } from '../api/axiosInstance'
import { type IProduct } from '../interfaces/product.interface'

function ProductDetails (): JSX.Element {
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()

  const { data } = useQuery({
    queryFn: async () => {
      const { data } = await local.get(`/products/${id}`)
      return data as IProduct
    },
    retry: 0,
    refetchOnWindowFocus: false
  })

  const increase = (): void => {
    setQuantity(prev => prev + 1)
  }

  const decrease = (): void => {
    setQuantity(prev => prev === 1 ? prev : prev - 1)
  }

  return (
    <section className='mt-40'>
      <section className='rounded-lg flex w-3/4 mx-auto border'>
        <aside className='flex w-1/2 p-2 max-sm:flex-col-reverse'>
          <ul className='flex flex-col max-sm:flex-row items-center justify-center gap-2'>
            <li className='border border-slate-300 rounded-md w-20'>
              <button>
                <img src={data?.image}/>
              </button>
            </li>
            <li className='border border-slate-300 rounded-md w-20'>
              <button>
                <img src={data?.image}/>
              </button>
            </li>
            <li className='border border-slate-300 rounded-md w-20'>
              <button>
                <img src={data?.image} />
              </button>
            </li>
          </ul>
          <img src={data?.image} className='w-11/12'/>
        </aside>
        <div className='flex flex-col items-center justify-evenly border-red-400 border w-1/2'>
          <h1 className='font-extrabold text-xl'>{data?.name}</h1>
          <span>{data?.description}.</span>
          <div className='flex'>
            <nav className='flex gap-2 text-center '>
              <button onClick={decrease} className='text-xl font-bold'>-</button>
              <div>
                <h1>QTD</h1>
                <span className='border border-slate-400 rounded-md m-2 p-2'>{quantity}</span>
              </div>
              <button onClick={increase} className='text-xl font-bold'>+</button>
            </nav>
            <button className='bg-slate-400 hover:bg-slate-600 p-1 rounded-md focus:'>Adicionar ao carrinho</button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProductDetails
