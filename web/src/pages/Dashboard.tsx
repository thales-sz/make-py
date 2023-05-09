import React from 'react'
import { useQuery } from 'react-query'

function Dashboard (): JSX.Element {
  const { data } = useQuery('dashboard', async () => {
    return 'string'
  })
  return (
    <div>{data}</div>
  )
}

export default Dashboard
