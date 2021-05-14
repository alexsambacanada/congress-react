import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Categories from './../components/Categories';
import Sponsors from './../components/Sponsors';
import Header from './../components/Header';
import NotFound from './../components/NotFound.js';
import App from './../components/App.js';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/sponsors" component={Sponsors} />
                    <Route path="/categories" component={Categories} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};


export default AppRouter;