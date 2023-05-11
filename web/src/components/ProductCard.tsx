import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface ProductCardProps {
  _id?: string
  name: string
  description: string
  price: number
  image: string
}

function ProductCard (props: ProductCardProps): JSX.Element {
  const [fav, setFav] = useState(false)

  return (
    <div className="flex max-h-[550px] w-1/4 min-w-[250px] max-w-[300px] flex-col justify-center text-center rounded-lg p-2 shadow-lg bg-slate-50 hover:drop-shadow-2xl hover:scale-[1.02] hover:cursor-pointer transform transition duration-500 gap-4 text-slate-900">
      <button onClick={() => { setFav(!fav) }}>
        {fav ? <AiFillHeart size={20}/> : <AiOutlineHeart size={20}/>}
      </button>
      <a href={`/product/${props._id}`}>
        <img
          src={props.image}
          width={250}
          className="rounded-lg"
        />
        <hr />
        <div className="text-xl font-semibold">{props.name}</div>
        <div className="text-gray-600 text-sm my-1">{props.description}</div>
        <div className='flex gap-2 text-center justify-center flex-wrap'>
          <s className="text-base">
            {(props.price + 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </s>
          <div className="text-3xl font-bold">
            {props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
          <div>ou até 10x de {(props.price / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
        </div>
        <button className='bg-slate-400 rounded-3xl p-2 h-fit hover:bg-slate-500 shadow-md mt-2'>COMPRAR</button>
      </a>
    </div>
  )
}

export default ProductCard
