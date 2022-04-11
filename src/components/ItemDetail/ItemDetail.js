
const ItemDetail = ({ id, title, img, category, description, price}) => {
    return (
        <article className="card col-md-3">
            <div className="cajaProducto">
                <h3 className="card-header"> {title}</h3>
                <picture className = "d-flex align-items-center">
                    <img src={img} alt={title} className="fotosProductos img-fluid rounded mx-auto d-block"/>
                </picture>
                <div className="card-text"> Categoría: {category}</div>
                <div className="card-text"> Descripción: {description}</div>     
                <footer className='card-footer'> Precio: ${price}</footer>
            </div>
        </article>
    )
}

export default ItemDetail