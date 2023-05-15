export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products?limit=40`)
      .then(res=>res.json())
        .then(json=>{
          resolve(json.filter(prod => prod.category !== "electronics")) //devuelvo solo los productos que voy a usar de la api
        })
    },500)
  })
}

var listaProductos = []

export const getProductById = (productId) =>{
  return new Promise((resolve) => {
    setTimeout(() => {
      getData()
      .then(Response => {
        listaProductos = Response // Aquí se asignan los datos a la variable listaProductos
        resolve(listaProductos.find(prod => prod.id === parseInt(productId))) //Se pasa el id de un string a un Int porque la api no los tiene como string
      })
    })
  })
}

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      getData()
      .then(Response => {
        listaProductos = Response // Aquí se asignan los datos a la variable listaProductos
        resolve(listaProductos.filter(prod => prod.category === categoryId)) 
      })
    })
  })
}
