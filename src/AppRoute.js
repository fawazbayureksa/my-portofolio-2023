import React from 'react';
import { BrowserRouter, Route, Switch,HashRouter } from "react-router-dom";
import RoutePath from './components/RoutePath';
import Home from './pages/Home';


const AppRoute = () => {
    return (
        <div>
            <HashRouter base="/">
                <Home />
            </HashRouter>
        </div>
    );
}

export default AppRoute;
