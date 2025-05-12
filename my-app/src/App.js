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
  const [form, setForm] = useState({ prop1: '', prop2: '', prop3: '' });
  const [currentId, setCurrentId] = useState(null);

  function handleSelect(note) {
    setForm({ prop1: note.prop1, prop2: note.prop2, prop3: note.prop3 });
    setCurrentId(note.id);
  }

  return (
    <div>
      <input value={form.prop1} readOnly />
      <input value={form.prop2} readOnly />
      <input value={form.prop3} readOnly />

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <span>{note.prop1} </span>
            <span>{note.prop2} </span>
            <span>{note.prop3} </span>
            <button onClick={() => handleSelect(note)}>Заполнить инпуты</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;