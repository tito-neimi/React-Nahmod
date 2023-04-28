import CartWidget from "../cart/cart.js"

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Plis U</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Sobre Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light " href="#">Contacto</a>
        </li>
      </ul>
        <CartWidget/>
    </div>
  </div>
</nav>
  )
}

export default navbar