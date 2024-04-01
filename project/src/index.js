import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter } from "react-router-dom";
import {Flag} from "./providers/Flag";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Flag>
    <App />
  </Flag>
  </BrowserRouter>
);



