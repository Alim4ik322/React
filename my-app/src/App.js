import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	const [result, setResult] = useState(null);

	return (
		<div>
			<input value={value1} onChange={e => setValue1(e.target.value)} />
			<input value={value2} onChange={e => setValue2(e.target.value)} />
			
			<button onClick={() => setResult(Number(value1) + Number(value2))}>Сумма</button>
			<button onClick={() => setResult(Number(value1) * Number(value2))}>Произведение</button>
			
			<p>Результат: {result}</p>
		</div>
	);
}

export default App;