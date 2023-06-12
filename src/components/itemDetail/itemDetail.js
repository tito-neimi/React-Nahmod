import { useContext, useState } from "react";
import ItemCount from "../ItemCount/itemcount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export const ItemDetail = ({title,image,description,price,id}) => {

  const [quantity, setQuantity] = useState(0)
  const {addItem} = useContext(CartContext)

  const estilo = {
    maxWidth: '800px',
  };

  const onAdd = (quantity) =>{

    setQuantity(quantity)
    const item ={
      price,id,title,image,quantity
    }
    addItem(item,quantity,)

  }

  return(
    <div className="card mb-3" style={estilo}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} class="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
            <h5 className="card-text">${price}</h5>
            {quantity > 0 ? (
              <>
                <Link to={"/cart"}>Terminar Compra</Link>
                <Link to={"/"}>Mas productos</Link>
              </>
              )
              :(
                <ItemCount inicial={1} max={10} onAddCarrito={onAdd}/>
              )
            }
          </div>
        </div>  
      </div>
    </div>)} 
