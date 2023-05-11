import React from 'react'

interface ProductCardProps {
  _id?: string
  name: string
  description: string
  price: number
}

function ProductCard (props: ProductCardProps): JSX.Element {
  return (
    <a href={`/products/${props._id}`} className="flex max-h-[450px] w-1/4 min-w-[150px] max-w-[260px] flex-col justify-center rounded-lg p-2 shadow-lg bg-slate-100 hover:shadow-2xl hover:cursor-pointer transform transition duration-500 gap-2">
      <img
        src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwb63a2826/images/Color%20BR/Fenty/eaze%20drop/FB_SPR_SUM21_T2PRODUCT_SILO_EAZE_DROP_CLOSED_10_2000x2000_1500px.jpg?sw=400&sh=400&sm=fit"
        width={250}
        className="rounded-lg"
      />
      <s className="text-base">
        {(props.price + 150).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </s>
      <div className="text-2xl font-bold -mt-2">
        {props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </div>
      <div className="text-xl font-normal">{props.name}</div>
      <div className="text-gray-600 text-sm">{props.description}</div>
    </a>
  )
}

export default ProductCard
