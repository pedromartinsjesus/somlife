import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import Contacto from './components/Contacto/contacto';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacto" component={Contacto} />
    </Switch>
)


export default Routes;