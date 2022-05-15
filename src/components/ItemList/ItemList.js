import Item from '../Item/Item'

const ItemList = ({products}) => {

    return(
        <>
        <h1 className='subtitle'>Productos</h1>
        <div className="row margin">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>   
        </> 
    )
}

export default ItemList
