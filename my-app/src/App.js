import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [checked, setChecked] = useState(false);
	const [message, setMessage] = useState('');

	function handleClick() {
		setMessage(checked ? 'Привет, пользователь!' : 'До свидания!');
	}

	return (
		<div>
			<input
				type="checkbox"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<button onClick={handleClick}>Проверить</button>
			<p>{message}</p>
		</div>
	);
}

export default App;