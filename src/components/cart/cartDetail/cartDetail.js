import { useContext, useState } from "react"
import { CartContext } from "../../../context/cartContext"
import { Link } from "react-router-dom"
import CartItem from "../cartItem/cartItem."

const CartDetail = () => {
  const {cart, clearCart, totalQuantity, total, removeItem} = useContext(CartContext)
    
  console.log(cart)  

  if (totalQuantity === 0) {
      return (
        <div className="d-flex flex-column align-items-center">
          <h1 className="my-5">No hay productos en el carrito</h1>
          <Link to={"/"} className="btn btn-primary">Nuestros Productos</Link>
        </div>
      )
    }
    else{
      return (
        <div className="container">
          <table className="table align-middle my-5">
            <tbody>
            <tr>
              <td colSpan={5} className="text-end"><button className="btn btn-primary" onClick={clearCart}>Vaciar carrito</button></td>
            </tr>
            {cart.map(producto => <CartItem key={producto.id} {...producto} click={() => removeItem(producto)}/> )}
            </tbody>
          </table> 
          <div className="d-flex flex-column align-items-center">
                <h3>Total a pagar ${total}</h3>
                <Link to={"/checkout"}><button className="btn btn-primary">Terminar compra</button></Link>
          </div>
        </div>  
      )
    }
}

export {CartDetail}