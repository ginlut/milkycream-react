import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget=() =>{
  const { getQuantity } = useContext(CartContext)
  return(
    <div className="CartWidget d-flex justify-content-center">
      <img src='https://i.ibb.co/TP386VN/carrito-de-compras.png' alt='carrito' className="cartImg"/>
      { getQuantity() }
    </div>
  )
}

export default CartWidget