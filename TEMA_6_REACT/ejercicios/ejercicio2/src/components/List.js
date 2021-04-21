export default function List(props) {
    return (
    <div className ="container">
        <h3>{props.category}</h3>
        <ul>
            {
                props.producto.map(producto =>{
                    return <li key={producto.id}  >
                    {producto.id}  {producto.producto}  {producto.marca} 
                    {producto.modelo} .Precio: {producto.precio}</li>
                })
            }
        </ul>
    </div>
    )
}