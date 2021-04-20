export default function List(props) {
    return (
    <div>
        <h3>{props.category}</h3>
        <ul>
            {
                props.producto.map(producto =>{
                    return <li>{producto.productos}{producto.marca}{producto.modelo}{producto.precio}</li>
                })
            }
        </ul>
    </div>
    )
}