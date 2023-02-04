import React from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { cartInfo } from '../data/cartInfo.js';
export default function Cart() {
  console.log()
  return (
    <section>
      <div className='container mx-auto px-4'>
        <h1 className='mt-5 text-2xl border-b-4 border-blue-500 inline-block p-2'>Your Chopping Cart</h1>
        {cartInfo.map((info) =>
          <section>
            <div className='flex items-center justify-between w-[50%] border-b-2 border-black'>
              <div className='flex items-center gap-8'>
                <img src="../../public/assets/shipped.png" className='w-[15rem] h-[15rem]' alt="" />
                <div>
                  <h2><b>Title:</b> {info.title}</h2>
                  <h2><b>Author:</b> {info.author}</h2>
                  <h2><b>Price:</b> ${info.price}</h2>
                </div>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <div className='flex justify-between items-center gap-5'>
                  <button className='bg-white border-2 border-black  text-black w-8 h-8 leading-4'>-</button>
                  <p>{info.quantity}</p>
                  <button className='bg-white  border-2 border-black  text-black w-8 h-8 leading-4'>+</button>
                </div>
                <p>${info.price * info.quantity}</p>

              </div>

            </div>
            <div className='-mt-7 ml-[45rem]'>
              <BsTrashFill size={20} color={'red'} cursor={'pointer'} />
            </div>
          </section>
        )}
        <section className=' w-[20%] border-2 border-black absolute top-[23rem] right-[12rem] text-center'>
          <h2 className='border-b-2 border-black text-xl'>ORDER SUMMARY</h2>
          <div className='border-b-2 border-black flex justify-between items-center px-4' >
            <span className='text-xl'>SubTotal</span>
            <span className='text-xl'>{cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}</span>
          </div>
          <div className='border-b-2 border-black flex justify-between items-center px-4'>
            <span className='text-xl'>ShoppingCost</span>
            <span className='text-xl'>0</span>
          </div>
          <div className='border-b-2 border-black flex justify-between items-center px-4'>
            <span className='text-xl'>Discount</span>
            <span className='text-xl'>0</span>
          </div>
          <div className='flex justify-between items-center px-4'>
            <span className='text-xl'>Total</span>
            <span className='text-xl'> {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}</span>
          </div>
        </section>
      </div>
    </section>
  )
}
