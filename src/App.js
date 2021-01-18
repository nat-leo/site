import React from 'react';
import landscape from './images/landscape1.jpg';
import bicycle from './images/bicycle.jpg';
import fields from './images/fields.jpg';
import flowers from './images/flowers.jpg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={landscape} height="500" width="300"/>
        <img src={bicycle} height="400" width="500"/>
        <img src={fields} height="350" width="500"/>
        <img src={flowers} height="400" width="500"/>
      </header>
    </div>
  );
}

export default App;
