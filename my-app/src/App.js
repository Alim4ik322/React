import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";


function App() {
  const [values, setValues] = useState(Array(5).fill(0));

  function handleChange(index, event) {
    const newValues = [...values];
    newValues[index] = +event.target.value;
    setValues(newValues);
  }

  const average = values.reduce((sum, num) => sum + num, 0) / values.length;

  return (
    <div>
      {values.map((value, index) => (
        <input
          key={index}
          value={value}
          onChange={(event) => handleChange(index, event)}
          type="number"
        />
      ))}
      <p>Среднее арифметическое: {average}</p>
    </div>
  );
}

export default App;