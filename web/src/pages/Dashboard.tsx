import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Unathorized from '../components/Unathorized'
import Loading from '../components/Loading'

function Dashboard (): JSX.Element {
  const navigate = useNavigate()
  const token = localStorage.getItem('user')

  if (token === null) navigate('/login')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/orders', { headers })
      return data
    },
    retry: 1,
    refetchOnWindowFocus: false
  })

  return (
    <div className='h-screen'>
      <Header />
      {isError
        ? <Unathorized />
        : (
            isLoading
              ? <Loading absolute={true}/>
              : <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2'>
                Conteúdo do Dashboard {data}
                </h1>
          )}
    </div>
  )
}

export default Dashboard
