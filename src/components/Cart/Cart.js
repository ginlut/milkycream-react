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
          <h1 className='subtitle'>No hay productos en el carrito</h1>
          <p className='redirectHome'> <Link to='/' className='noUnderline'>¡Mira nuestros productos!</Link></p></>
      )
  }

  return (
    <>
    <div className='containerCart'>
      <h1 className='subtitle'>Carrito</h1>
      <ItemCart/>

    </div>
    <h2>El total de su compra es de { getTotal() } pesos</h2>
    <div className='center'>
        <button onClick={clearCart} className="btn btn-outline-info "> Vaciar carrito  </button>
        <NavLink to='/' ><button className="btn btn-outline-info ">Seguir comprando </button></NavLink>
        <NavLink to='/Form' ><button className="btn btn-outline-info ">Continuar compra</button></NavLink>
      </div>
    </>
  )
}


export default Cart