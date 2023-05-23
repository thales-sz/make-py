import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { api } from '../api/queryClient'

function ProductDetails (): JSX.Element {
  const { id } = useParams()

  const { data } = useQuery({
    queryFn: async () => {
      const { data } = await api.get(`/products/${id}`)
      return data
    },
    retry: 0,
    refetchOnWindowFocus: false
  })

  return (
    <section className='w-screen'>
      {JSON.stringify(data)}
    </section>
  )
}

export default ProductDetails
