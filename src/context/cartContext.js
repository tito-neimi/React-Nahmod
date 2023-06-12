import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
})

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  const [total,setTotal] = useState(0)
  const [totalQuantity,setTotalQuantity] = useState(0)

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity}])
      sumarTotal(item.price, quantity)
      getTotalQuantity(quantity)
    }
    else {
      console.error('el producto ya fue agregado')
      return (false)
    }
  }

  const sumarTotal = (precio, cantidad) => {
    setTotal(prev => prev + precio * cantidad);
  }

  // const sumarTotal = () => {
  //   const precioTotal = cart.reduce((acumulador, producto) => acumulador + (producto.price * producto.quantity),0);
  //   setTotal(precioTotal)
  //   }

  const getTotalQuantity = (cantidad) => {
    setTotalQuantity(prev => prev + cantidad)
  }

  const removeItem = (item) => {
    const cartUpdated = cart.filter(prod => prod.id !== item.id)
    setCart(cartUpdated)
    setTotal(prev => prev - (item.quantity * item.price))
    setTotalQuantity(prev => prev - item.quantity)
  }

  const isInCart = (item) => {
    return cart.some(prod => prod.id === item)
  }

  const clearCart = () => {
    setCart([])
    setTotalQuantity(0)
    setTotal(0)
  } 
  

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
      {children}
    </CartContext.Provider>
  )
}