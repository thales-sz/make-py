import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Unathorized from '../components/Unathorized'
import Loading from '../components/Loading'
import Dashboard from '../components/Dashboard/Dashboard'

function DashboardPage (): JSX.Element {
  const navigate = useNavigate()
  const token = localStorage.getItem('user')

  if (token === null) navigate('/login')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }

  const { isLoading, isError } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/orders', { headers })
      return data
    },
    retry: 0,
    refetchOnWindowFocus: false
  })

  return (
    <div className='h-screen'>
      <Header />
      {isError
        ? <Unathorized />
        : (isLoading ? <Loading absolute={true}/> : <Dashboard />)}
    </div>
  )
}

export default DashboardPage
