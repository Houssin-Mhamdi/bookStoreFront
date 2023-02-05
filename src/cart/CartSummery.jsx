import React from 'react'

export default function CartSummery({totalPrice}) {
    return (
        <>
            <section className=' w-[20%] border-2 border-black absolute top-[23rem] right-[12rem] text-center'>
                <h2 className='border-b-2 border-black text-xl'>ORDER SUMMARY</h2>
                <div className='border-b-2 border-black flex justify-between items-center px-4' >
                    <span className='text-xl'>SubTotal</span>
                    <span className='text-xl'> ${totalPrice}</span>
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
                    <span className='text-xl'> ${totalPrice}</span>
                </div>
            </section>
        </>
    )
}
