import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';
import './styles.css';

function App() {
  return (
    <div className="wrapper">
      <button className="btn1">Кнопка 1</button>
      <button className="btn2">Кнопка 2</button>
    </div>
  );
}
export default App;
