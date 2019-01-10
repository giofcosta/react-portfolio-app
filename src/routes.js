import React from 'react'
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Home from "./pages/home";

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    </HashRouter>
);
