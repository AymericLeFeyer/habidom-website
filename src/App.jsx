import React from 'react';
import "./style/bootstrap.min.css";
import './style/App.css'; 


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse.js';



// Components
import Appbar from "./components/Appbar"


import { BrowserRouter }  from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Appbar />
        <div className="App-content">
        lorem*64
        
         

         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
