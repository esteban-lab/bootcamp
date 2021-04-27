import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import './App.css';
import Appej1 from "./Paginas/Appej1";
import Appej2 from  "./Paginas/Appej2";
import AppeJ3 from  "./Paginas/Appej3";
import Appej4 from "./Paginas/Appej4";


 function App() {
  return (
    <div className="App">
     <BrowserRouter>
            <nav class= "navbar navbar-light bg-dark">
            <NavLink className="text-white" to="/Paginas/Appej1" activeClassName="active text-warning"> Pagina 1</NavLink>
            <NavLink className="text-white" to="/Paginas/Appej2" activeClassName="active text-warning"> Pagina 2</NavLink>
            <NavLink className="text-white" to="/Paginas/Appej3" activeClassName="active text-warning">  Pagina 3</NavLink>
            <NavLink className="text-white" to="/Paginas/Appej4" activeClassName="active text-warning">  Pagina 4</NavLink>
            </nav>
            <Switch>
                <Route exact path ="/Paginas/Appej1" component={Appej1}/>
                <Route exact path ="/Paginas/Appej2" component={Appej2}/>
                <Route path ="/Paginas/Appej3" component={AppeJ3}/>
                <Route path ="/Paginas/Appej4" component={Appej4}/>

           
                {/* <Route component={Error}/> */}
            </Switch>
     
     
     </BrowserRouter>

    </div>
  );
}

export default App;
