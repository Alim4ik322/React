import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [value, setValue] = useState('');
	const [sum, setSum] = useState(null);

	function handleBlur() {
		const digits = value.split('').map(Number).filter(n => !isNaN(n));
		const total = digits.reduce((acc, cur) => acc + cur, 0);
		setSum(total);
	}

	return (
		<div>
			<input value={value} onChange={e => setValue(e.target.value)} onBlur={handleBlur} />
			<p>Сумма цифр: {sum}</p>
		</div>
	);
}


export default App;