import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './assets/css/style.css'

import routes from './routes'
import Header from './components/Header';
import Footer from './components/Footer';



ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Header />
      <div className="container">

        <Switch>
          {routes.map((route, idx) =>
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
            />
          )}
        </Switch>

      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
