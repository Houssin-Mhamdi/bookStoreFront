import React, { useContext } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import BookStoreContext from '../context/cartContext';

export default function SingleCart({ info }) {
    const { title, author, price, quantity, image, id } = info
    const { removeFromCart, addtoCart } = useContext(BookStoreContext)
    console.log(info)
    return (
        <>
            <section>
                <div className='flex items-center justify-between w-[50%] border-b-2 border-black'>
                    <div className='flex items-center gap-8'>
                        <img src={image} className='w-[10rem] h-[15rem] p-5' alt="" />
                        <div>
                            <h2><b>Title:</b> {title}</h2>
                            <h2><b>Author:</b> {author}</h2>
                            <h2><b>Price:</b> ${price}</h2>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <div className='flex justify-between items-center gap-5'>
                            <button className='bg-white border-2 border-black  text-black w-8 h-8 leading-4' onClick={() => addtoCart({ ...info, quantity: info.quantity - 1 })}>-</button>
                            <p>{quantity}</p>
                            <button className='bg-white  border-2 border-black  text-black w-8 h-8 leading-4' onClick={() => addtoCart({ ...info, quantity: info.quantity + 1 })}>+</button>
                        </div>
                        <p>${(price * quantity).toFixed(2)}</p>

                    </div>

                </div>
                <div className='-mt-7 ml-[45rem]'>
                    <BsTrashFill size={20} color={'red'} cursor={'pointer'} onClick={() => removeFromCart(id)} />
                </div>
            </section>
        </>
    )
}
