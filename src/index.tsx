import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Protected from './components/Protected';
import * as serviceWorker from './serviceWorker';
import Login from "./components/Login";
import {Provider} from "react-redux";
import { Route, Link, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from "./configureStore";
import {PublicPage} from "./components/Public";
import PrivateRoute from "./components/PrivateRoute";

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <>
              <ul>
                  <li>
                      <Link to="/">Public Page</Link>
                  </li>
                  <li>
                      <Link to="/protected">Protected Page</Link>
                  </li>
                  <li>
                      <Link to="/login">Login Page</Link>
                  </li>
              </ul>

              <Switch>
                  <Route exact path='/' component={PublicPage}/>
                  <PrivateRoute path='/protected' component={Protected}/>
                  <Route path='/login' component={Login}/>
              </Switch>
          </>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
