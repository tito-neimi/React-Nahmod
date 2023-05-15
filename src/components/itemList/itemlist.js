import Item from "../item/item.js"

const ItemList = ({ productos }) =>{
  return(
    <div className="contenedor-productos d-flex gap-3 justify-content-center flex-wrap">
      {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList