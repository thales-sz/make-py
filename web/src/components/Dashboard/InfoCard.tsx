import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

interface InfoCardProps {
  title: string
  value: number
  growthRate: number
  relation: string
  isCurrency: boolean
}

function InfoCard ({ title, value, growthRate, relation, isCurrency }: InfoCardProps): JSX.Element {
  return (
    <div className='flex flex-col bg-slate-50 max-w-xs rounded-md items-left p-3 w-full shadow-lg border border-slate-300'>
      <h1 className='text-lg font-semibold'>{title}</h1>
      <p className='text-3xl font-bold self-center my-1'>{
        isCurrency ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : value
      }</p>
      <hr className='my-3'/>
      <div className='flex gap-3'>
        <div className={`${growthRate > 0 ? 'bg-green-300 text-green-600' : 'bg-red-300 text-red-800'} max-w-min items-center rounded-lg flex text-center gap-1 font-semibold px-1`}>
          {growthRate > 0 ? <AiOutlineArrowUp size={20}/> : <AiOutlineArrowDown size={20} />}
          {growthRate > 0 ? growthRate : (growthRate * -1)}%
        </div>
        <span>{relation}</span>
      </div>
    </div>
  )
}

export default InfoCard
