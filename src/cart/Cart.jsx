import React from 'react';

import { useContext } from 'react';
import BookStoreContext from '../context/cartContext.js';
import CartSummery from './CartSummery.jsx';
import SingleCart from './SingleCart.jsx';
export default function Cart() {
  const { cartInfo } = useContext(BookStoreContext)
  const totalPrice = (cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)).toFixed(2)
  return (
    <section className='h-[100auto]'>
      {cartInfo.length>0?<div className='container mx-auto px-4'>
        <h1 className='mt-5 text-2xl border-b-4 border-blue-500 inline-block p-2'>Your Chopping Cart</h1>
        {cartInfo.map((info) =>
          <SingleCart info={info} key={info.id} />
        )}
        <CartSummery totalPrice={totalPrice} />
      </div>:<div className='text-2xl font-bold text-center p-5'>There Is No Book</div>}
    </section>
  )
}
