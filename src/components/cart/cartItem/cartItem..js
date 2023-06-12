import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"

const CartItem = (producto) => {
  const {removeItem} = useContext(CartContext)

  return(
    <tr>
              <td><img src={producto.image} alt={producto.title} width={"50px"} height={"50px"}></img></td>
              <td><h4>{producto.title}</h4></td>
              <td><h4>1x{producto.price}</h4></td>
              <td><h4>{producto.quantity}</h4></td>
              <td><button className="btn btn-primary" onClick={() => removeItem(producto)}>X</button></td>
    </tr>
  )
}
export default CartItem