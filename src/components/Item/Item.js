import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, img, price }) => {
    return ( 
        <div className = "card col-md-3" >
            <div className = " cajaProducto" >
                <h3 className = "card-header" > { title } </h3> 
                <picture className = "d-flex align-items-center"><img src = {img} alt={title} className="fotosProductos img-fluid rounded mx-auto d-block" />
                </picture> 
                <h4 className = "card-text" >  Precio: ${price} </h4>
            </div> 
            <div className = "card-footer" >
                <button  className="btn btn-outline-info "> <Link to={`/detail/${id}`} className=" botonProductos">Ver detalle</Link></button>
            </div> 
        </div>
    )
}

export default Item