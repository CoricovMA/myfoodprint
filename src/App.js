import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import Router from './Router/Router'

export const history = createBrowserHistory({ basename: '/' });

 const reducer = (history) => combineReducers({
    router: connectRouter(history),
  });

  const store = createStore(reducer(history), applyMiddleware(ReduxThunk, routerMiddleware(history)));

function App() {

  return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
}

export default App;
