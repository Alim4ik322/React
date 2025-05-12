import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';
function getSum(arr) {
  return arr.reduce((acc, val) => acc + Number(val), 0);
}

function Calculator() {
  const [value, setValue] = useState('');
  const [nums, setNums] = useState([1, 2, 3]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleBlur() {
    setNums([...nums, value]);
    setValue('');
  }

  return (
    <div>
      <p>{getSum(nums)}</p>
      <input value={value} onChange={handleChange} onBlur={handleBlur} />
    </div>
  );
}

export default Calculator;
