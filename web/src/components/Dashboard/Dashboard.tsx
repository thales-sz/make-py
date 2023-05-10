import React from 'react'
import InfoCard from './InfoCard'

function Dashboard (): JSX.Element {
  const data = {
    title: 'Receita mensal',
    value: 4580,
    growthRate: 12,
    relation: 'Em relação ao mês anterior',
    isCurrency: true
  }

  const data1 = {
    title: 'Total de pedidos',
    value: 150,
    growthRate: 2,
    relation: 'Em relação a ontem',
    isCurrency: false
  }

  const data2 = {
    title: 'Receita diária',
    value: 456.7,
    growthRate: -0.2,
    relation: 'Em relação a ontem',
    isCurrency: true
  }

  const data3 = {
    title: 'Média de receita diária',
    value: data.value / 20,
    growthRate: -13,
    relation: 'Em relação ao mês anterior',
    isCurrency: true
  }

  return (
    <div className='flex gap-3 mt-40 mx-auto w-3/4 flex-wrap justify-center'>
      <InfoCard {...data}/>
      <InfoCard {...data1}/>
      <InfoCard {...data2}/>
      <InfoCard {...data3}/>
    </div>
  )
}

export default Dashboard
