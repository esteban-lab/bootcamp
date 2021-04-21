
import './App.css';
import Shop from "./components/Shop";

function App(props) {
  return (
    <div className="App">
     <Shop/>
    </div>
  );
}

const contactos = {
  contacto1: [
      {id: 27, producto: "Televisor", marca: "LG", modelo: "XP7302", precio: 399},
      {id: 28, producto: "Equipo Hi-FI", marca: "Samsung", modelo: "VF235", precio: 179},
      {id: 29, producto: "Televisor", marca: "Sony", modelo: "Bravia-173", precio: 498},
  ],
  contacto2: [
      {id: 30, producto: "Galletas", marca: "María", precio: 0.90},
      {id: 31, producto: "Ensalada", marca: "Imizurra", precio: 1.30},
      {id: 32, producto: "Patatas", marca: "McKain", precio: 0.90},
      {id: 33, producto: "Pasta", marca: "Gallo", precio: 0.90},
  ],
  contacto3: [
      {id: 34, producto: "Croquetas para gato", marca: "Purina", precio: 4.90},
      {id: 35, producto: "Arena de gato", marca: "Limpior", precio: 1.10},
  ]
};
export default App;
