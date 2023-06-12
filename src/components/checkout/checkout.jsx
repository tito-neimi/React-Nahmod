import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const Checkout = () => {
  const [generando, setGenerando] = useState()
  const [orderId, setOrderID] = useState()
  const [datos, setDatos] = useState({})

  const {cart, total, clearCart} = useContext(CartContext)

  const datosComprador = (e) => {
    setDatos({ 
      ...datos,
      [e.target.name]:e.target.value
    }
    )
  }

  const createOrder =  (e) => {
    if (cart = []) {
      
    }
    setGenerando(true)
    e.preventDefault()    
          console.log(datos, cart, total, Timestamp.fromDate(new Date()))
    const ventasRef = collection(db,'orders')
      addDoc(ventasRef,{
        buyer: datos,
        prodcuts: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
    })
    .then (res => {
      setOrderID(res.id)
      clearCart()
      return(
        <h2>Su numero de id es {orderId}</h2>
      )
    })
    .catch(err => console.log(err))
  }
  return(
    <div>
    {!orderId ? 
      <div className="container d-flex flex-column justify-content-center">
      <form  onSubmit={createOrder}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="name" className="form-control" name="name" id="name" onChange={datosComprador} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" id="email" onChange={datosComprador} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Telefono</label>
          <input type="number" className="form-control" name="telefono" id="telefono" onChange={datosComprador} required/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
          <label className="form-check-label" htmlFor="exampleCheck1">Acepto los <a>Terminos y Conciones</a></label>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  :
    <div className="container d-flex flex-column align-item-center justify-content-center text-center h-100">
      <h2>Muchas gracias por su compra</h2>
      <h3>Su codigo de orden es {orderId}</h3>
    </div>
  }
  </div> 
  )
}

export {Checkout}