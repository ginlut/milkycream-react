import { useState } from 'react'
import './ItemCount.css'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
 
    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    if(stock === 0) {
        return <button className='Option' disabled>Lo sentimos, no hay stock</button>
    }

    return(
        <div>
            <div className="contador">
                <button disabled={count<=initial} onClick={decrement}  className="btn-outline-info botonContador">  -  </button> 
                <p>{count}</p>
                <button disabled={count >= stock} onClick={increment} className="btn-outline-info botonContador">  +  </button> 
            </div>
            <button onClick={() => onAdd(count)} className="btn btn-info">Agregar al carrito</button>
        </div>
    )
} 

export default Counter