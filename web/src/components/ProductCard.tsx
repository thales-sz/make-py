import React from 'react'

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: number
}

function ProductCard(props: ProductCardProps): JSX.Element {
  return (
    <div className="flex max-h-[430px] w-1/3 min-w-[290px] max-w-[290px] flex-col justify-center rounded-lg bg-gradient-to-b from-slate-900 to-slate-100 p-2">
      <img
        src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwb63a2826/images/Color%20BR/Fenty/eaze%20drop/FB_SPR_SUM21_T2PRODUCT_SILO_EAZE_DROP_CLOSED_10_2000x2000_1500px.jpg?sw=400&sh=400&sm=fit"
        width={280}
        className="rounded-lg"
      />
      <div className="text-2xl font-normal">{props.name}</div>
      <div className="text-gray-600">{props.description}</div>
      <div className="text-xl font-bold">R$ {props.price}</div>
      <button className="mx-auto w-2/3 rounded-xl bg-slate-600 p-2 text-slate-300 hover:scale-105 hover:bg-slate-500 hover:text-slate-200">
        Adicionar ao carrinho
      </button>
    </div>
  )
}

export default ProductCard
