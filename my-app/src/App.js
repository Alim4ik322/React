import logo from './logo.svg';
import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
function App() {
  const id1 = nanoid(); 
  const id2 = uuid();

  return (
    <div>
      <p>Сгенерированный ID (nanoid): {id1}</p>
	  <p>Сгенерированный UUID (react-uuid): {id2}</p>
    </div>
  );
}

export default App;
  
  
