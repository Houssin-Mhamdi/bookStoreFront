import React from 'react';
import { BsBookFill, BsFillHandbagFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
export default function Search() {
    return (
        <div className='container mx-auto px-4 bg-slate-400 py-10'>
            <div className='flex justify-between items-center '>
                <div className='flex justify-between items-center text-lg text-white'>

                    <h3 className='text-xl mr-2'>Book</h3>
                    <h3><BsBookFill className='text-xl' /></h3>
                    <h3 className='text-xl ml-2'>store</h3>
                </div>
                <div className='relative'>
                    <input type="text" placeholder='Search...' className='w-[35rem] h-10 rounded-lg p-3 shadow-lg' />
                    <CiSearch className='absolute top-2 right-3 text-2xl'/>
                </div>
                <div className='flex justify-between items-center text-lg text-white'>
                    <BsFillHandbagFill className='text-xl' />
                </div>
            </div>
        </div>
    )
}
