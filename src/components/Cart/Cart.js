import {useContext} from 'react'
import CartContext from "../../context/CartContext"
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
import './Cart.css'
import { NavLink } from 'react-router-dom'



const Cart =() => {

  const { clearCart, getTotal, getQuantity  } = useContext(CartContext)
     
 
  if(getQuantity() === 0) {
      return (<>
          <h1>No hay productos en el carrito</h1>
          <Link to='/'>¡Mira nuestros productos!</Link></>
      )
  }

  return (
    <>
    <h1>Carrito</h1>
    <ItemCart/>
    <p>El total de su compra es de { getTotal() } $</p>
    <button onClick={clearCart} > Vaciar carrito  </button>
    <NavLink to='/Form'><button>Terminar compra</button></NavLink>
    </>
  )
}


export default Cart