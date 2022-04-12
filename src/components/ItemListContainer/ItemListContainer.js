import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
    

  const { categoryId } = useParams()

  useEffect(() => {
      getProducts(categoryId).then(prods => {
          setProducts(prods)
      }).catch(error => {
          console.log(error)
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