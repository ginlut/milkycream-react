import { useState, useEffect } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)
 
    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <button onClick={(e)=>{if (count > initial) {decrement(e)}}}>-</button> 
            <p>{count}</p>
            <button onClick={(e)=>{if (count < stock) {increment(e)}}}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter