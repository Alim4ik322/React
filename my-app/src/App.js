import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [selected, setSelected] = useState('');

	function handleChange(event) {
		setSelected(event.target.value);
	}

	return (
		<div>
			<input
				type="radio"
				name="option"
				value="1"
				checked={selected === '1'}
				onChange={handleChange}
			/> 1
			<input
				type="radio"
				name="option"
				value="2"
				checked={selected === '2'}
				onChange={handleChange}
			/> 2
			<input
				type="radio"
				name="option"
				value="3"
				checked={selected === '3'}
				onChange={handleChange}
			/> 3

			<p>Вы выбрали: {selected}</p>
		</div>
	);
}


export default App;