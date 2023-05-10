import React from 'react'

function OrdersList (): JSX.Element {
  const data = {
    id: '1das89',
    totalPrice: 150,
    products: ['prod1', 'prod2'],
    deliveryAddress: 'endereço de entrega',
    createdAt: new Date()
  }

  return (
    <div className='flex flex-col bg-slate-50 max-w-lg rounded-md items-left p-3 w-full shadow-lg border border-slate-300 mt-5'>
      <h1 className='text-2xl font-semibold'>Pedidos</h1>
      <ul>
        {[data, data, data].map((data, index) => {
          return (
          <li className='flex gap-4 my-2 w-full border bg-slate-100 rounded-md items-center justify-around h-10 shadow-md' key={index}>
            <div>{data.id}</div>
            <span>{data.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <div>{data.createdAt.toLocaleString()}</div>
            <button className='bg-slate-400 hover:bg-slate-600 shadow-md rounded-md px-1 h-2/3'>Visualizar</button>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OrdersList
