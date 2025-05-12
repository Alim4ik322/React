import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";


function App() {
	const [value, setValue] = useState('');
	const [product, setProduct] = useState(null);

	function handleBlur() {
		const num = Number(value);
		if (isNaN(num) || num <= 0) return;

		let prod = 1;
		for (let i = 1; i <= num; i++) {
			if (num % i === 0) {
				prod *= i;
			}
		}
		setProduct(prod);
	}

	return (
		<div>
			<input value={value} onChange={e => setValue(e.target.value)} onBlur={handleBlur} />
			<p>Произведение делителей: {product}</p>
		</div>
	);
}

export default App;