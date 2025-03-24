import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
function App() {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <span>{isBanned ? 'пользователь в бане' : 'пользователь разбанен'}</span>
      {isBanned ? (
        <button onClick={() => setIsBanned(false)}>Разбанить пользователя</button>
      ) : (
        <button onClick={() => setIsBanned(true)}>Забанить пользователя</button>
      )}
    </div>
  );
}


export default App;
  