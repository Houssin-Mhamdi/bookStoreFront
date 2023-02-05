import React, { useContext } from 'react';
import { BsBookFill, BsFillHandbagFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import BookStoreContext from '../context/cartContext';
export default function Search() {
    const { CartInfoLength } = useContext(BookStoreContext)
    return (
        <div className='container mx-auto px-4 bg-slate-400 py-10'>
            <div className='flex justify-between items-center '>
                <div className='flex justify-between items-center text-lg text-white cursor-pointer' onClick={() => window.location.href = '/'}>

                    <h3 className='text-xl mr-2'>Book</h3>
                    <h3><BsBookFill className='text-xl animate-bounce w-5 h-5' /></h3>
                    <h3 className='text-xl ml-2'>store</h3>
                </div>
                <div className='relative'>
                    <input type="text" placeholder='Search...' className='w-[35rem] h-10 rounded-lg p-3 shadow-lg' />
                    <CiSearch className='absolute top-2 right-3 text-2xl' />
                </div>
                <div className='flex justify-between items-center text-lg text-white'>
                    <Link to='/cart'>
                        {CartInfoLength > 0 ? (<b className='absolute bg-red-600 w-5 h-5 rounded-full leading-5 flex items-center justify-center text-sm right-2 top-24 animate-bounce cursor-pointer'>{CartInfoLength}</b>):('')}
                        <BsFillHandbagFill cursor={'pointer'} size={25} /></Link>
                </div>
            </div>
        </div>
    )
}
