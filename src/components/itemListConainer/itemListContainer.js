import { useState, useEffect } from "react"
import ItemList from "../itemList/itemlist"
import { getData, getProductByCategory } from "../../promises"
import { useParams } from "react-router-dom"

const ItemListConainer = ({bienvenida}) => {

  const [productos,setProductos] = useState([])
  const {categoryId} = useParams()
  
  useEffect(() => {

    const asyncFunc = categoryId ? getProductByCategory : getData //elije entre las dos opciones de filtrado Item/Categoria segun la url

    asyncFunc(categoryId)
    .then(Response => {
      setProductos(Response)
      console.log(productos)
    })
    .catch(error => {
      console.error(error)
    }) 
      },[categoryId]) 

  return (
    <>
      <div className="my-5 mx-5">
        <h3>{bienvenida}</h3>
        <ItemList productos={productos}/>
      </div>
    </>
  )
  }

export default ItemListConainer