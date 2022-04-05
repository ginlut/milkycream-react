import { useState, useEffect } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
 
    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <button disabled={count<=initial} onClick={decrement}>-</button> 
            <p>{count}</p>
            <button disabled={count >= stock} onClick={increment}>+</button> 
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter