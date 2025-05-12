import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [text, setText] = useState('');

	function calculateSum(str) {
		return str
			.split('\n')
			.map(line => Number(line.trim()))
			.filter(n => !isNaN(n))
			.reduce((acc, cur) => acc + cur, 0);
	}

	return (
		<div>
			<textarea value={text} onChange={e => setText(e.target.value)} />
			<p>Сумма: {calculateSum(text)}</p>
		</div>
	);
}

export default App;