import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const today = new Date().toISOString().split('T')[0];
	const [date1, setDate1] = useState(today);
	const [date2, setDate2] = useState(today);
	const [diff, setDiff] = useState(null);

	function handleClick() {
		const d1 = new Date(date1);
		const d2 = new Date(date2);
		const difference = Math.abs(d1 - d2);
		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		setDiff(days);
	}

	return (
		<div>
			<input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
			<input type="date" value={date2} onChange={e => setDate2(e.target.value)} />
			<button onClick={handleClick}>Разница в днях</button>
			<p>Разница: {diff} дней</p>
		</div>
	);
}


export default App;