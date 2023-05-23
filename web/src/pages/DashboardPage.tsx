import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import Unathorized from '../components/Unathorized'
import Loading from '../components/Loading'
import Dashboard from '../components/Dashboard/Dashboard'
import { api } from '../api/axiosInstance'

function DashboardPage (): JSX.Element {
  const navigate = useNavigate()
  const token = localStorage.getItem('user')

  if (token === null) navigate('/login')

  const headers = {
    Authorization: `Bearer ${token}`
  }

  const { isLoading, isError } = useQuery({
    queryFn: async () => {
      const { data } = await api.get('/orders', { headers })
      return data
    },
    retry: 0,
    refetchOnWindowFocus: false
  })

  return (
    <div className='min-h-screen h-full'>
      <Header />
      {isError
        ? <Unathorized />
        : (isLoading ? <Loading absolute={true}/> : <Dashboard />)}
    </div>
  )
}

export default DashboardPage
