import React, { useState } from 'react';
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { BsFillCalendarDateFill, BsFillHandbagFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating.jsx';
import { books } from '../data/books.js';
import { useContext } from 'react';
import BookStoreContext from '../context/cartContext.js'
export default function Book() {
    const [qty,setQty]= useState(1)
    const {addtoCart} = useContext(BookStoreContext)
    const { id } = useParams()
    const book = books.find(b => b.id === parseInt(id)) //parstInt === +id
    const { image, inStock, author, description, PublicationDate, language, price, rating, reviews, title, printLength } = book

    return (

        <div>
            <div className='flex justify-start items-start p-8'>

                <div className='flex gap-11'>
                    <div>
                        <img src={image} alt={title} />
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <h5 className='font-bold text-2xl'>{title}</h5>
                            <b className='text-xl'>Status: </b>{inStock ? 'in stock' : 'not in stock'}
                        </div>
                        <div className='w-[10rem]'>
                            <Rating rating={rating} reviews={reviews} />
                            <b className='text-xl'>Author: </b>{author}
                        </div>
                        <div>
                            <b className='text-xl'>Price: </b>{price}$
                        </div>
                        <div >
                            <input className='w-40 bg-slate-100 p-1 mr-2 rounded-md border-2 border-black' type="number" min='1' max="100" placeholder='1' onChange={(e)=>setQty(e.target.value)} value={qty}/>
                            <button className='text-green-500 border-2 border-green-500 p-1 w-32' onClick={()=>addtoCart({...book,quantity:qty})}>
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
                        <h2> {description}</h2>
                        <div className='flex justify-between text-center items-center py-4 mt-5 w-69 bg-slate-300 px-11'>
                            <div className='text-center'>
                                <h3 className='-ml-9 mb-2'>publication date</h3>
                                <BsFillCalendarDateFill size={30} />
                                <h2 className='-ml-9 mt-2'>{PublicationDate}</h2>
                            </div>
                            <div className='text-center'>
                                <h3 className='-ml-5 mb-2'>langue</h3>
                                <BiWorld size={30} />
                                <h2 className='-ml-2 mt-2'> {language} </h2>
                            </div>
                            <div className='text-center'>
                                <h3 className='-ml-2 mb-2'>pages</h3>
                                <AiOutlineFileAdd size={30} />
                                <h2 className='-ml-2 mt-2'> {printLength}</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
