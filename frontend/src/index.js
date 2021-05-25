import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import './assets/index.css';
import App from './containers/App';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const history = createBrowserHistory();

export const store = createStore(rootReducer(history), applyMiddleware(thunk, routerMiddleware(history)))

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
