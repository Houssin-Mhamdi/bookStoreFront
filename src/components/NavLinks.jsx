import React from 'react'
import { Link } from "react-router-dom"

export default function NavLinks() {
    return (
        <nav className='container mx-auto px-96 py-5 bg-white shadow-lg'>
            <ul className='flex justify-between items-center text-lg'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>

    )
}
