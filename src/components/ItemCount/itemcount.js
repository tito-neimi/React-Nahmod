import { useState } from 'react'

const ItemCount = ({max,inicial,onAddCarrito}) => {
  const [cantidad, setCantidad] = useState(inicial)

  const increment = () =>{
    console.log(cantidad)
    if (max > cantidad) {
      setCantidad(cantidad+1);
    }
  }
  const decrement = () =>{
    if (cantidad >= 1) {
      setCantidad(cantidad-1);
    }
  }
  
  return(
    <div className='d-flex flex-column my-5'>
      <div className='d-flex justify-content-center gap-3  ' >
        <button className="btn btn-primary" onClick={decrement} type='button'>-</button>
        <h3>{cantidad}</h3>
        <button className="btn btn-primary" onClick={increment} type='button'>+</button>
      </div>
      <div>
        <button className='btn btn-primary my-1' type='button' onClick={() => onAddCarrito(cantidad)}> Agregar al carrito</button>
      </div>
    </div>
  )

  
}

export default ItemCount