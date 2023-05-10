import React from 'react'
import InfoCard from './InfoCard'

function Dashboard (): JSX.Element {
  const data = {
    title: 'Total Profit',
    profit: 4580,
    growthRate: 12
  }
  return (
    <div className='mt-40'>
      <InfoCard {...data}/>
    </div>
  )
}

export default Dashboard
