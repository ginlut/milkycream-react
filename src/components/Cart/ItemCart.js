import {useContext} from 'react'
import CartContext from "../../context/CartContext"

const ItemCart =(id, title, price, quantity)=> {
  const { cart, removeItem } = useContext(CartContext)
  return (
    <>
    <ul>
        {
            cart.map(prod => <div key={prod.id}>
            <button className="" onClick={() => 
                removeItem(prod.id)}>X
            </button>
            <p>{prod.title} </p>
            <p> Cantidad: {prod.quantity}  </p>
            <p> Precio unitario: {prod.price} pesos </p>
            <p> Subtotal: {prod.quantity * prod.price} pesos </p>

                  
          </div>)
        }   
    </ul>

    
  </>
    )


}

export default ItemCart