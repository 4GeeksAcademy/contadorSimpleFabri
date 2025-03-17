import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// components
import Home from './components/Home';
import SecondsCounter from './components/secoundscounter/SecoundsCounter';


let counter = 0;//variable

const renderCounter = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <SecondsCounter seconds={counter} />
    );
    counter++;
  };
  
  setInterval(renderCounter, 1000);
