import React from 'react'
import { Link } from "react-router-dom"

export default function NavLinks() {
    return (
        <nav className='container mx-auto px-96 bg-white shadow-lg'>
            <ul className='flex justify-between items-center text-lg'>
                <li className='hover:bg-slate-400 p-5 hover:text-white cursor-pointer'><Link to="/">Home</Link></li>
                <li className='hover:bg-slate-400 p-5 hover:text-white cursor-pointer'><Link to="/authors">Authors</Link></li>
                <li className='hover:bg-slate-400 p-5 hover:text-white cursor-pointer'><Link to="/about">About</Link></li>
                <li className='hover:bg-slate-400 p-5 hover:text-white cursor-pointer'><Link to="/contact">Contact</Link></li>
                <li className='hover:bg-slate-400 p-5 hover:text-white cursor-pointer'><Link to="/register">Register</Link></li>
                
            </ul>
        </nav>

    )
}
