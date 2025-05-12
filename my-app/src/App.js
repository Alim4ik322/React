import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function changeHandler(index, event) {
    const newNotes = [...notes];
    newNotes[index] = event.target.value;
    setNotes(newNotes);
  }

  function getAverage(arr) {
    const nums = arr.map(Number).filter(n => !isNaN(n));
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return (sum / nums.length).toFixed(2);
  }

  return (
    <div>
      {notes.map((note, index) => (
        <input
          key={index}
          value={note}
          onChange={event => changeHandler(index, event)}
          style={{ marginRight: '5px' }}
        />
      ))}
      <p>Среднее арифметическое: {getAverage(notes)}</p>
    </div>
  );
}


export default App;