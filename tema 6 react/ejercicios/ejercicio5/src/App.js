import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import './App.css';
import Error from './Paginas/Error';
import Appej1 from "./Paginas/Appej1";
import Appej2 from "./Paginas/Appej2";
import AppeJ3 from "./Paginas/Appej3";
import Appej4 from "./Paginas/Appej4";


 function App() {
  return (
    <div className="App">
     <BrowserRouter>
            <nav class= "navbar navbar-light bg-dark">
            <NavLink exact to="/" activeClassName="active text-warning" className="text-decoration-none text-white font-weight-bold"> Pagina 1</NavLink>
            <NavLink to="/Paginas/Appej2" activeClassName="active text-warning" className="text-decoration-none text-white font-weight-bold"> Pagina 2</NavLink>
            <NavLink to="/Paginas/Appej3" activeClassName="active text-warning" className="text-decoration-none text-white font-weight-bold">  Pagina 3</NavLink>
            <NavLink to="/Paginas/Appej4" activeClassName="active text-warning" className="text-decoration-none text-white font-weight-bold">  Pagina 4</NavLink>
            </nav>
            <Switch>
                <Route exact path ="/" component={Appej1}/>
                <Route  path ="/Paginas/Appej2" component={Appej2}/>
                <Route  path ="/Paginas/Appej3" component={AppeJ3}/>
                <Route  path ="/Paginas/Appej4" component={Appej4}/>

                <Route component={Error}/>
            </Switch>
     
     
     </BrowserRouter>

    </div>
  );
}

export default App;
