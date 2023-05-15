
import {  NavLink } from "react-router-dom";

const Filtros = () => {
  return (
    <div className="my-5">
      <NavLink to={`/category/women's clothing`} className="btn btn-outline-primary mx-1">Ropa de Mujer</NavLink>
      <NavLink to={`/category/men's clothing`} className="btn btn-outline-primary mx-1">Ropa de Hombre</NavLink>
      <NavLink to={`/category/jewelery`} className="btn btn-outline-primary mx-1">Joyas</NavLink>
    </div>
  )
}
export default Filtros