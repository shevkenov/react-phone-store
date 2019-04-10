import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {ProductProvider} from './components/context.js';
import './index.css';
import App from './App';

ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />    
        </Router>
    </ProductProvider>
    , document.getElementById('root')
);