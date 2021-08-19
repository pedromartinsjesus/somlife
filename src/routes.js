import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import Contacto from './components/Contacto/contacto';
import ComoFunciona from './components/Como_Funciona/comoFunciona';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/como_funciona" component={ComoFunciona} />
    </Switch>
)


export default Routes;