import {createContext, useState} from "react";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import './App.css';
import Error from './Paginas/Error';
import Appej1 from "./Paginas/Appej1";
import Appej2 from "./Paginas/Appej2";
import AppeJ3 from "./Paginas/Appej3";
import Appej4 from "./Paginas/Appej4";

export const GlobalContext = createContext();

const InitialContactosState = [

  {id:1, nombre: "Pompeyo", apellidos: "Ayala Vega", direccion: "calle panorama 666", ciudad:"Monaco", cp: 398035, tlf: 677708990}, 
  {id:2, nombre: "Seya", apellidos: "lurin janampa", direccion: "calle panorama 456", ciudad:"Osaka", cp: 303235, tlf: 645608990},
  {id:3, nombre: "Esmeregildo", apellidos: "Miro Quesada", direccion: "calle infiernillo 69", ciudad:"Krakobia", cp: 32355, tlf: 678708990}
];

  

 function App() {
  const [contactos, setContactos] = useState(InitialContactosState);
  return (
    <div className="App">
     <BrowserRouter>
            <nav class= "navbar navbar-light bg-dark">
            <NavLink exact to="/" activeClassName="active text-warning" className="text-decoration-none text-white font-weight-bold"> Pagina 1</NavLink>
            <NavLink to="/Paginas/Appej2" activeClassName="active text-warning" className="text-decoration-none text-white font-weight-bold"> Pagina 2</NavLink>
            <NavLink to="/Paginas/Appej3" activeClassName="active text-warning" className="text-decoration-none text-white font-weight-bold">  Pagina 3</NavLink>
            <NavLink to="/Paginas/Appej4" activeClassName="active text-warning" className="text-decoration-none text-white font-weight-bold">  Pagina 4</NavLink>
            </nav>

            <GlobalContext.Provider value={{contactos, setContactos}}>
                <Switch>
                    <Route exact path ="/" component={Appej1}/>
                    <Route  path ="/Paginas/Appej2" component={Appej2}/>
                    <Route  path ="/Paginas/Appej3" component={AppeJ3}/>
                    <Route  path ="/Paginas/Appej4" component={Appej4}/>

                    <Route component={Error}/>
                </Switch>
            </GlobalContext.Provider>
     
     </BrowserRouter>

    </div>
  );
}

export default App;
