import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';

function TempInp({ temp, setTemp }) {
  return (
    <div>
      <label>Температура воды (в °C): </label>
      <input
        type="number"
        value={temp}
        onChange={e => setTemp(Number(e.target.value))}
      />
    </div>
  );
}

// Компонент Verdict: отображает агрегированное состояние воды
function Verdict({ temp }) {
  let text;

  if (temp <= 0) {
    text = 'Вода в твёрдом состоянии (лёд)';
  } else if (temp >= 100) {
    text = 'Вода в газообразном состоянии (пар)';
  } else {
    text = 'Вода в жидком состоянии';
  }

  return <p>{text}</p>;
}

// Главный компонент-контейнер
function Calculator() {
  const [temp, setTemp] = useState(0);

  return (
    <div>
      <h2>Калькулятор температуры воды</h2>
      <TempInp temp={temp} setTemp={setTemp} />
      <Verdict temp={temp} />
    </div>
  );
}

// Точка входа — компонент App
export default function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

