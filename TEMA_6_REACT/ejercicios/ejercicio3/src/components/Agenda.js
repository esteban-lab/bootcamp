
import React from 'react'

export default function Agenda(props) {
    return (
    <div className ="row align-items-start d-flex justify-content-around">
      
            {
                props.data.map(contacto =>{

                    return <ul key={contacto.id}>
                        <li className="list-group-item active h6" aria-current="true">contacto {contacto.id}</li>
                        <li className="list-group-item">{contacto.nombre}</li>
                        <li className="list-group-item">{contacto.apellidos}</li>
                        <li className="list-group-item">{contacto.telefono}</li>
                        <li className="list-group-item">{contacto.direccion},{contacto.cp},{contacto.ciudad}</li>
                        <li className="list-group-item"><button type="button" class="btn btn-warning">Eliminar</button></li>
                    </ul>
                }
                    )
            }
        
    </div>
    )
}