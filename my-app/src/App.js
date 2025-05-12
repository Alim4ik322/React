import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

const initNotes = [
  { id: '1', prop1: 'value11', prop2: 'value12', prop3: 'value13' },
  { id: '2', prop1: 'value21', prop2: 'value22', prop3: 'value23' },
  { id: '3', prop1: 'value31', prop2: 'value32', prop3: 'value33' },
];

function App() {
  const [notes, setNotes] = useState(initNotes);

  function handleDelete(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <span>{note.prop1} </span>
          <span>{note.prop2} </span>
          <span>{note.prop3} </span>
          <button onClick={() => handleDelete(note.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}
export default App;