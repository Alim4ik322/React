import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';
function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);
  const [value, setValue] = useState('');

  function startEdit(index) {
    setEditNum(index);
    setValue(notes[index]);
  }

  function changeItem(event) {
    setValue(event.target.value);
  }

  function saveItem() {
    const updated = [...notes];
    updated[editNum] = value;
    setNotes(updated);
    setEditNum(null);
    setValue('');
  }

  return (
    <div>
      {notes.map((note, index) => (
        <p key={index} onClick={() => startEdit(index)}>
          {note}
        </p>
      ))}

      {editNum !== null && (
        <>
          <input value={value} onChange={changeItem} />
          <button onClick={saveItem}>Сохранить</button>
        </>
      )}
    </div>
  );
}

export default App;
