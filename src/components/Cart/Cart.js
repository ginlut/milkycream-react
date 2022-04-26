import {useContext} from 'react'
import CartContext from "../../context/CartContext"
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom'
import './Cart.css'


const Cart =() => {

  const { cart } = useContext(CartContext)

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
    </>
  )
}


export default Cart