import { useState, useEffect } from "react"
import ItemList from "../itemList/itemlist"
import { useParams } from "react-router-dom"
import Filtros from "../filtros/filtros"
import { db } from "../../firebase/firebaseConfig";
import { getDocs, collection, query, where} from "firebase/firestore"

const ItemListConainer = ({bienvenida}) => {

  const [productos,setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {

    const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', "==", categoryId))
        : collection(db, 'products')
    
        getDocs(collectionRef)  
          .then(response => {
            const productsAdapted = response.docs.map(doc => {
              const data = doc.data()
              return {id: doc.id, ...data}
            })
            setProductos(productsAdapted)
          })
          .catch(error => {
            console.log(error)
          })
    },[categoryId])

  return (
    <>
    <Filtros/>
      <div className="my-5 mx-5">
        <h3>{bienvenida}</h3>
        <ItemList productos={productos}/>
      </div>
    </>
  )
  }

export default ItemListConainer