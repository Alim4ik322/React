import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: 'Цельсия', f: 'Фаренгейта' };

  return (
    <div>
      <label>Температура в градусах {scaleNames[scale]}:</label>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale('c');
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale('f');
  };

  const celsius =
    scale === 'f' ? toCelsius(parseFloat(temperature) || 0) : temperature;
  const fahrenheit =
    scale === 'c' ? toFahrenheit(parseFloat(temperature) || 0) : temperature;

  return (
    <>
      <TemperatureInput
        scale="c"
        temperature={scale === 'c' ? temperature : celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={scale === 'f' ? temperature : fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </>
  );
}

export default Calculator;
