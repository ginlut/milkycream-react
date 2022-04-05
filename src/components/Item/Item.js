import './Item.css'

const Item = ({ title, img }) => {
    return ( <
        div className = "card col-md-3" >
        <
        div className = " cajaProducto" >
        <
        h3 className = "card-header" > { title } < /h3> <
        picture className = "d-flex align-items-center" >
        <
        img src = { img }
        alt = { title }
        className = "fotosProductos img-fluid rounded mx-auto d-block" / >
        <
        /picture> <
        /div> <
        div className = "card-footer" >
        <
        button className = "botonProductos" > Ver Detalle < /button> <
        /div> <
        /div>
    )
}

export default Item