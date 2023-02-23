
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Find all widget divs
const widgetDivs = document.querySelectorAll('.notion-widget');

// Inject our React App into each class
widgetDivs.forEach(Div => {
    ReactDOM.render(
      <React.StrictMode>
        <App domElement={Div} />
      </React.StrictMode>,
        Div
    );
});