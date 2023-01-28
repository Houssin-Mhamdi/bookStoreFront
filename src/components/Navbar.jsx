import React from 'react'
import { Route, Routes } from "react-router-dom"
import About from '../pages/About.jsx'
import Authors from '../pages/Authors.jsx'
import Contact from '../pages/Contact.jsx'
import Home from '../pages/Home.jsx'
import Register from '../pages/Register.jsx'
export default function Navbar() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}