import { store } from "./store";
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider  store={store}>
    <App/>
  </Provider>
    
    </BrowserRouter>
  </React.StrictMode>
);