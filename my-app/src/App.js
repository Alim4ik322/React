import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

const initNotes = [
  {
    id: nanoid(),
    name: "name1",
    desc: "long description 1",
    show: false,
  },
  {
    id: nanoid(),
    name: "name2",
    desc: "long description 2",
    show: false,
  },
  {
    id: nanoid(),
    name: "name3",
    desc: "long description 3",
    show: false,
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);

  function toggleDescription(id) {
    setNotes(notes.map(note => {
      if (note.id === id) {
        return { ...note, show: true };
      }
      return note;
    }));
  }

  return (
    <div>
      {notes.map(note => (
        <p key={note.id}>
          {note.name}
          {note.show && <i> — {note.desc}</i>}
          {!note.show && (
            <button onClick={() => toggleDescription(note.id)}>Показать описание</button>
          )}
        </p>
      ))}
    </div>
  );
}
export default App;