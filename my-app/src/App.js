import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: 'Цельсий', f: 'Фаренгейт' };

  return (
    <fieldset>
      <legend>Температура в {scaleNames[scale]}:</legend>
      <input
        type="number"
        value={temperature}
        onChange={e => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function toCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function toFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => {
    setScale('c');
    setTemperature(temp);
  };

  const handleFahrenheitChange = (temp) => {
    setScale('f');
    setTemperature(temp);
  };

  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

  return (
    <div>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
    </div>
  );
}

export default Calculator;
