
import { useEffect, useState } from "react"
import { getProductById } from "../../promises"
import { ItemDetail } from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const {itemId} = useParams()

useEffect(() => {
  getProductById(itemId)
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })
}, [itemId])

  return(
    <div className="itemDetailContainer d-flex justify-content-center">
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
