import Cart from './assets/cart.svg'

const CartWidget= () => {
  return(
      <a alt="carrito" className="btn btn-warning position-relative">
        <img src={Cart} alt="carrtio"/>
        <span class="position-absolute top-0 start-99 translate-middle badge rounded-pill bg-danger">
    1+
          <span class="visually-hidden">unread messages</span>
        </span>
      </a> 
  )
}

export default CartWidget