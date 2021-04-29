import React from 'react';
import Error from '../paginas/Error';
import Details from "../paginas/Details";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Index from "../paginas/Index";
import {BrowserRouter, Route, Switch} from 'react-router-dom';



export default function Router() {
    return (
        <BrowserRouter>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/record/:movieID" component={Details}/>
                    <Route path="/record" component={Details}/>

                    <Route component={Error}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
    )
}
