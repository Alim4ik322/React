import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';

function App() {
const[name, setName]=useState('John')
const[surname, setSurname]=useState('Johnson')
const[age, setAge]=useState('28')
return <div>
  <span>{name}</span>
  <span>      </span>
  <span>{surname}</span>
  <span>      </span>
  <span>{age}</span>
</div>
}

export default App;
  