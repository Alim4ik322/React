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

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleUpdate() {
    setNotes(notes.map(note => {
      if (note.id === currentId) {
        return { ...note, ...form };
      }
      return note;
    }));
  }

  return (
    <div>
      <input name="prop1" value={form.prop1} onChange={handleChange} />
      <input name="prop2" value={form.prop2} onChange={handleChange} />
      <input name="prop3" value={form.prop3} onChange={handleChange} />
      <button onClick={handleUpdate} disabled={!currentId}>Обновить</button>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <span>{note.prop1} </span>
            <span>{note.prop2} </span>
            <span>{note.prop3} </span>
            <button onClick={() => handleSelect(note)}>Редактировать</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;