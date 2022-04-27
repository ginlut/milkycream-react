import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })
        .finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div className="ItemDetailContainer" >

            { loading ? 
                <img src="https://cdn.dribbble.com/users/1415819/screenshots/4061539/icecream_8.gif" className="loadImg" alt="cargando"/> :
                product ?  
                    <ItemDetail  {...product} /> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer