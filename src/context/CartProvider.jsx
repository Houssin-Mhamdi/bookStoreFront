import React, { useState } from 'react'
import BookStoreContext from './cartContext'
export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState([])
  //add to the cart
  const addtoCart = (item) => {
    const IsExist = cartInfo.find((card) => card.id === item.id)
    if (IsExist) {
      setCartInfo(cartInfo.map((cardItem) => cardItem.id === item.id ? item : cardItem))
    } else {

      setCartInfo((prev) => [...prev, item])
    }
    if(item.quantity === 0) {
      setCartInfo(cartInfo.filter((itemc)=>itemc.id !== item.id))
    }
  }
  //remove from the cart 
  const removeFromCart = (id) => {
    const item = cartInfo.filter((item) => item.id !== id)
      setCartInfo(item)
  }
  return (
    <BookStoreContext.Provider value={{ addtoCart, cartInfo, CartInfoLength: cartInfo.length, removeFromCart }}>
      {children}
    </BookStoreContext.Provider>
  )
}
