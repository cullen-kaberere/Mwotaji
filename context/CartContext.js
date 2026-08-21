// context/CartContext.js
"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem("mwotaji_cart")
    if (saved) {
      try { setCart(JSON.parse(saved)) } catch (e) { console.error(e) }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("mwotaji_cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, size, color) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id && item.size === size && item.color === color
      )
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, size, color, quantity: 1 }]
    })
  }

  const removeFromCart = (id, size, color) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size && item.color === color)))
  }

  const updateQuantity = (id, size, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color)
      return
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.color === color ? { ...item, quantity } : item
      )
    )
  }

  const getCartCount = () => cart.reduce((total, item) => total + item.quantity, 0)
  const getSubtotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const hasBulkDiscount = () => getCartCount() >= 2
  const getDiscountAmount = () => (hasBulkDiscount() ? getSubtotal() * 0.1 : 0)
  const getCartTotal = () => getSubtotal() - getDiscountAmount()

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartCount,
        getSubtotal,
        hasBulkDiscount,
        getDiscountAmount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)