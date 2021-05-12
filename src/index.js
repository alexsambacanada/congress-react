import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/App';
import Categories from './components/Categories';
import Sponsors from './components/Sponsors';
import Header from './components/Header';
import NotFound from './components/NotFound.js';


const routes = (
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
);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  routes,
  document.getElementById('root')
);
