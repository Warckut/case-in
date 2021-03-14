import React from 'react';
import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [text, setText] = useState({});

  useEffect(() => {
    async function fetchData() {
      const responce = await fetch('http://localhost:5000');
      const data = await responce.json();
      setText(data.text);
    } 
    fetchData();
  });

  return (
    <div className="App">
      <h1>{text.toString()}</h1>
    </div>
  );
}

export default App;
