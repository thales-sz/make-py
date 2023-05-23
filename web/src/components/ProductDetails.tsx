import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { local } from '../api/axiosInstance'
import { type IProduct } from '../interfaces/product.interface'

function ProductDetails (): JSX.Element {
  const { id } = useParams()

  const { data } = useQuery({
    queryFn: async () => {
      const { data } = await local.get(`/products/${id}`)
      return data as IProduct
    },
    retry: 0,
    refetchOnWindowFocus: false
  })

  return (
    <section className='mt-40'>
      <section className='bg-slate-100 rounded-lg flex items-center w-1/3 mx-auto justify-between'>
        <aside className='flex w-1/2 p-2'>
          <ul className='flex flex-col items-center justify-center gap-2'>
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
          <img src={data?.image} className='w-5/6'/>
        </aside>
        <div className='w-1/4'>
          <h1 className='font-extrabold text-xl'>{data?.name}</h1>
          <caption>{data?.description}.</caption>
          <button>Adicionar ao carrinho</button>
        </div>
      </section>
    </section>
  )
}

export default ProductDetails
