import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";

import Index from "./Pages/Index";
import Dashboard from "./Pages/Dashboard";
import Record from "./Pages/Record";
import Error from "./Pages/Error";


export default function Router() {
    return (
        <div>
            <BrowserRouter>

            <NavLink to="/" activeClassName="active"> Ir a Inicio </NavLink>
            <NavLink to="/dashboard" > Panel de control</NavLink>
            <NavLink to="/record/7">  Record 1</NavLink>
         

            <Switch>
                <Route exact path ="/" component={Index}/>
                <Route path ="/dashboard" component={Dashboard}/>
                <Route path ="/record/:user" component={Record}/>
           
                <Route component={Error}/>
            </Switch>
            </BrowserRouter>
            <h2>Footer</h2>
        </div>
    )
}
