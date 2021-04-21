
import './App.css';
import Agenda from "./components/Agenda";
import Formulario from "./components/Formulario";

function App(props) {
  const contactos = {

    datos: [
        {id:1, nombre: "Juan", Apellidos: "Ayala Vega", direccion: "calle panorama 666", ciudad:"Monaco", cp: 39835, tlf: 677708990}, 
        {id:2, nombre: "estebitan", Apellidos: "lurin janampa", direccion: "calle panorama 456", ciudad:"Osaka", cp: 303235, tlf: 645608990},
        {id:3, nombre: "Juan", Apellidos: "Miro Quesada", direccion: "calle infiernillo 69", ciudad:"Krakobia", cp: 32355, tlf: 678708990}
    ]
  };


  return (
    <div className="App">
      <h3 className="h3">Contact List</h3>
      <Agenda data={contactos.datos}/>
      <h3 className="h3">New Contact</h3>
      <Formulario/>
    
    </div>
  );
}

export default App;
