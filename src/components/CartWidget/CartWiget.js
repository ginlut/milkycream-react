import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget=() =>{
  const { getQuantity } = useContext(CartContext)
  return(
    <div className="CartWidget d-flex justify-content-center">
      <Link to="/cart">
        <img src='https://i.ibb.co/TP386VN/carrito-de-compras.png' alt='carrito' className="cartImg"/>
        { getQuantity() }
      </Link>
    </div>
  )
}

export default CartWidget