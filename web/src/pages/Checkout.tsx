import React from 'react'

function Checkout (): JSX.Element {
  return (
  <form id="form-checkout" className='flex flex-col max-w-[600px]'>
    <div id="form-checkout__cardNumber" className="h-5 inline-block border rounded-sm px-1 py-2" />
    <div id="form-checkout__expirationDate" className="h-5 inline-block border rounded-sm px-1 py-2" />
    <div id="form-checkout__securityCode" className="h-5 inline-block border rounded-sm px-1 py-2" />
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer" />
    <select id="form-checkout__installments" />
    <select id="form-checkout__identificationType" />
    <input type="text" id="form-checkout__identificationNumber" />
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pagar</button>
    <progress value="0" className="progress-bar">Carregando...</progress>
  </form>
  )
}

export default Checkout
