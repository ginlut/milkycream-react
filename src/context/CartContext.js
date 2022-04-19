import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(product => {
            count += product.quantity
        })
        return count
    }
    
    const isInCart = (id) => {
        return cart.some(product => product.id === id )
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext