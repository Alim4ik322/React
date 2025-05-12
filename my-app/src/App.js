import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

const initDate = {
  year: 2025,
  month: 12,
  day: 31,
};

function App() {
  const [date, setDate] = useState(initDate);

  function handleChange(prop, event) {
    setDate({ ...date, [prop]: event.target.value });
  }

  function getWeekDay({ year, month, day }) {
    const dateObj = new Date(year, month - 1, day); // JS month: 0-based
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[dateObj.getDay()];
  }

  return (
    <div>
      <input
        type="number"
        value={date.year}
        onChange={(e) => handleChange('year', e)}
      />
      <input
        type="number"
        value={date.month}
        onChange={(e) => handleChange('month', e)}
      />
      <input
        type="number"
        value={date.day}
        onChange={(e) => handleChange('day', e)}
      />
      <p>
        Дата: {date.year}-{date.month}-{date.day}
      </p>
      <p>День недели: {getWeekDay(date)}</p>
    </div>
  );
}


export default App;