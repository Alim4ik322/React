import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';

function App() {
  return (
    <div>
      <h1>Главный компонент App</h1>
      <User />
    </div>
  );
}

export default App;