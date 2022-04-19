import Counter from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, title, img, category, description, price, stock}) => {
    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (count) => {

     const productObject = {
        id, title, price, quantity: count
    }

    addItem(productObject)
   }
    return (
        <article className="card col-md-3">
            <div className="cajaProducto">
                <h3 className="card-header"> {title}</h3>
                <picture className = "d-flex align-items-center">
                    <img src={img} alt={title} className="fotosProductos img-fluid rounded mx-auto d-block"/>
                </picture>
                <div className="card-text"> Categoría: {category}</div>
                <div className="card-text"> Descripción: {description}</div>  
                {isInCart(id) ? <Link to='/cart'>Terminar Compra</Link> : <Counter initial={1} stock={stock} onAdd={handleOnAdd}/> }   
                <footer className='card-footer'> Precio: ${price}</footer>

            </div>
        </article>
    )
}

export default ItemDetail