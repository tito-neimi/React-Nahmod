import { useContext, useState } from 'react'
import Cart from './assets/cart.svg'
import { CartContext } from '../../context/cartContext'
import { useEffect } from 'react'

const CartWidget= () => {
  const { totalQuantity } = useContext(CartContext)

  const [visible, setVisible] = useState(false)

  useEffect(() =>{
    if (totalQuantity > 0) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  },[totalQuantity])

  return(
      <a alt="carrito" className="btn btn-warning position-relative">
        <img src={Cart} alt="carrtio"/>
        {visible ? <span class="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">{totalQuantity}<span class="visually-hidden">unread messages</span></span> : <></>}
      </a> 
  )
}


export default CartWidget 