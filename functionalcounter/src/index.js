import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
let store = createStore(reducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
