import { Link } from "react-router-dom";

const Item = ({id, title, image, price}) => {
  return(
    <div className="card " style={{width:"16rem"}}>
      <img src={image} className="card-img-top " width={"150px"} height={"300px"} alt={title}/>
      <div className="card-body position-relative ">
        <h2 className="card-title fs-5">{title}</h2>
        <h2 className="card-text fs-6" >${price}</h2>
        <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
      </div>
    </div>
  )
}

export default Item