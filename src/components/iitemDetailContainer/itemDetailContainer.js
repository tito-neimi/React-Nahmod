
import { useEffect, useState } from "react"
import { ItemDetail } from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"
import Filtros from "../filtros/filtros"
import { db } from "../../firebase/firebaseConfig"
import {  doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const {itemId} = useParams()


  useEffect(() => {
   const docRef = doc(db, 'products', itemId)

   getDoc(docRef)
   .then(response => {
    const data = response.data()
    const productAdapapted = {id: response.id, ...data}
    setProduct(productAdapapted)
   })
   .catch(error =>{
    console.log(error)
   })
  }, [itemId])

  return(
    <>
      <Filtros/>
      <div className="itemDetailContainer d-flex justify-content-center">
      <ItemDetail {...product}/>
      </div>
    </>
  )
}

export default ItemDetailContainer
