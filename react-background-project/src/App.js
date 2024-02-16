import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Background,setBackground]=useState("white");
  const body=document.querySelector("body");
  body.style.backgroundColor=Background;
  
  return (
    <div className="App">
      <nav className="nav">
        <button onClick={()=>{setBackground("red")}} className="colors red">Red</button>
        <button onClick={()=>{setBackground("blue")}} className="colors blue">Blue</button>
        <button onClick={()=>{setBackground("green")}} className="colors green">Green</button>
        <button onClick={()=>{setBackground("yellow")}} className="colors yellow">Yellow</button>
        <button onClick={()=>{setBackground("black")}} className="colors black">Black</button>
        <button onClick={()=>{setBackground("purple")}} className="colors purple">Purple</button>
        <button onClick={()=>{setBackground("white")}} className="colors white">White</button>
      </nav>
    </div>
  );
}

export default App;
