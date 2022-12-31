import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoutePath from './components/RoutePath';
import Home from './pages/Home';


const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={RoutePath.HOMEPAGE} component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default AppRoute;
