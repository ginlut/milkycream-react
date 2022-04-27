import {useContext} from 'react'
import CartContext from "../../context/CartContext"
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
import './Cart.css'


const Cart =() => {

  const { cart, clearCart, getTotal } = useContext(CartContext)
     


  if(cart.length === 0) {
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
    <button onClick={clearCart} > Vaciar carrito

    </button>
    </>
  )
}


export default Cart