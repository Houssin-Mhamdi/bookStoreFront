import React, { useContext, useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import BookStoreContext from '../context/cartContext';
import Rating from './Rating';

export default function Modal({ bookData, setOpenModal }) {
    const [qty,setQty]=useState(1)
    const {addtoCart} = useContext(BookStoreContext)
    const { image, inStock, author, PublicationDate,id, language, price, rating, reviews, title, printLength } = bookData
    return (
        <div className='fixed top-0 left-0 w-[100vw] h-[100vw] bg-neutral-900/50 z-10 flex items-center justify-center ' >
            <div className='w-[50%] h-[44%] bg-white rounded-xl relative -mt-[53%] flex justify-start items-start p-8'>
                <div className='absolute top-5 right-6 hover:shadow-lg hover:drop-shadow-xl'>
                    <AiFillCloseCircle cursor={'pointer'} size={20} color={'crimson'} onClick={() => setOpenModal(false)} />
                </div>
                <div className='flex gap-11'>
                    <div>
                        <img src={image} alt={title} />
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <h5 className='font-bold text-2xl'>{title}</h5>
                            <b className='text-xl'>Status: </b>{inStock ? 'in stock' : 'not in stock'}
                        </div>
                        <div>
                            <Rating rating={rating} reviews={reviews} />
                            <b className='text-xl'>Author: </b>{author}
                        </div>
                        <div>
                            <b className='text-xl'>Price: </b>{price}$
                        </div>
                        <div >
                            <input className='w-40 bg-slate-100 p-1 mr-2 rounded-md border-2 border-black' type="number" min='1' max="100" placeholder='1' onChange={(e)=>setQty(e.target.value)} value={qty}/>
                            <button className='text-green-500 border-2 border-green-500 p-1 w-32' onClick={()=>addtoCart({...bookData,quantity:qty})}>
                                <div className='flex justify-center items-center'>
                                    <span className='mr-2'>
                                        <BsFillHandbagFill />
                                    </span>
                                    <div>
                                        add to card
                                    </div>
                                </div>
                            </button>
                        </div>
                            <Link to={`/book/${id}`} className='bg-blue-600 mt-8 p-2 rounded-xl text-center text-white font-bold hover:shadow-2xl hover:drop-shadow-xl'>See More Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
