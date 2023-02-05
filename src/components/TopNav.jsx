import React from 'react';
import { AiFillPhone } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function TopNav() {
    return (
        <div className='container mx-auto px-4 bg-slate-400 py-3 border-b-2 border-white'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center text-lg text-white'>
                    <AiFillPhone />
                    <h3 className='ml-2'>123-23-23-54</h3>
                </div>
                <h2 className='text-xl text-white cursor-pointer'>Welcome To Online Book Store</h2>
                <Link to='/login' className='flex justify-between items-center text-lg text-white'>
                    <BsPersonFill /><h3 className='ml-2 cursor-pointer'>Login</h3>
                </Link>
            </div>

        </div>
    )
}
