import { Link, NavLink } from "react-router-dom"
import CartWidget from "../cart/cart.js"

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light" to="/">Plis U</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Sobre Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light " href="#">Contacto</a>
        </li>
      </ul>
        <Link to={"/cart"}><CartWidget/></Link>
    </div>
  </div>
</nav>
  )
}

export default navbar