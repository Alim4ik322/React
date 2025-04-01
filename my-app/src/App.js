import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
function App() {
	const [value, setValue] = useState('');
	const [value1, setValue1] = useState('');
	return <div>
		<input value={value} onChange={event => setValue(event.target.value)} /> 
		<p>text: {value}</p>
		<input value1={value1} onChange={event => setValue1(event.target.value)} /> 
		<p>text: {value1}</p>
	</div>;
}

export default App;
  