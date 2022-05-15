import {useContext} from 'react'
import CartContext from "../../context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const ItemCart =(id, title, price, quantity)=> {
  const { cart, removeItem } = useContext(CartContext)


  return (
    <>
        {
            cart.map(prod => <div key={prod.id}  className='productInCart'>
            <p>{prod.title} </p>
            <p> Cantidad: {prod.quantity}  </p>
            <p> Precio unitario: {prod.price} pesos </p>
            <p> Subtotal: {prod.quantity * prod.price} pesos </p>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => 
                removeItem(prod.id) } className='btnDelete' > 
            </FontAwesomeIcon>
          </div>)
        }      
  </>
    )


}

export default ItemCart