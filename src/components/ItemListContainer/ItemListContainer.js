import { useState, useEffect } from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId 
    ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
    : query(collection(firestoreDb, 'products'))

    getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
          })
          setProducts(products)
      })

      .finally(() => {
        setLoading(false)
    })
  }, [categoryId])

    return(
      <div>
           { loading ? 
                <img src="https://cdn.dribbble.com/users/1415819/screenshots/4061539/icecream_8.gif" className="loadImg" alt="cargando"/> 
                        :
          <ItemList products={products}/>
           }
      </div>
  )
}

export default ItemListContainer