import React from 'react';
import landscape from './assets/landscape1.jpg';
import bicycle from './assets/bicycle.jpg';
import fields from './assets/fields.jpg';
import flowers from './assets/flowers.jpg';
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
