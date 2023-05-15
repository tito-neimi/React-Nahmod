import ItemCount from "../ItemCount/itemcount";

export const ItemDetail = ({title,image,description,price}) => {

  const estilo = {
    maxWidth: '800px',
  };

  return(
    <div className="card mb-3" style={estilo}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} class="img-fluid rounded-start" alt={title} width={"200px"} height={"400px"}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
            <ItemCount inicial={1} max={10}/>
          </div>
        </div>
      </div>
    </div>)} 
