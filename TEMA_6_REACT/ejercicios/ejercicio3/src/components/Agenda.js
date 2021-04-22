export default function Agenda({ contactos }) {
    console.log(contactos);
    return (
        <div className="row">
            {contactos.map((contacto, index) => {
                return (
                <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contacto.tlf}>
                    <li className="list-group-item active">Contacto {index + 1}</li>
                    <li className="list-group-item">{contacto.nombre}</li>
                    <li className="list-group-item">{contacto.apellidos}</li>
                    <li className="list-group-item">{contacto.tlf}</li>
                    <li className="list-group-item">{contacto.direccion}, {contacto.cp}, {contacto.ciudad}</li>
                </ul>
                );
            })}
        </div>
    )
    }