import React, { useState } from 'react'
import BookStoreContext from './cartContext'
export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState([])
  //add to the cart
  const addtoCart = (item) => {
    console.log(item)
    setCartInfo((prev) => [...prev, item])
  }
  //remove from the cart 
  const removeFromCart = (id)=>{
    const item = cartInfo.filter((item)=>item.id !== id)
    setCartInfo(item)
  }
  return (
    <BookStoreContext.Provider value={{ addtoCart, cartInfo, CartInfoLength: cartInfo.length ,removeFromCart}}>
      {children}
    </BookStoreContext.Provider>
  )
}
