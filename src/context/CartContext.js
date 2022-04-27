import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {

        if (!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }

        else{
            const updateProducts = cart.map(prod => {

                if(prod.id === productToAdd.id) {
                    const updateProducts = {
                        ...prod,
                        quantity:prod.quantity + productToAdd.quantity                   
                    }
                    return updateProducts
                }

                else{
                    return prod
                }
            })
            
        setCart(updateProducts)
        }
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

   
    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        let count = 0
        cart.forEach(product => {
            count += product.quantity * product.price
        })
        return count
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }
    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext