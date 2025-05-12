import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [text, setText] = useState('Привет, React!');
	const [isChecked, setIsChecked] = useState(true);

	return (
		<div>
			<h3>Инпут с defaultValue:</h3>
			<input defaultValue={text} />

			<h3>Чекбокс с defaultChecked:</h3>
			<label>
				<input type="checkbox" defaultChecked={isChecked} />
				Чекбокс по умолчанию {isChecked ? 'отмечен' : 'не отмечен'}
			</label>
		</div>
	);
}

export default App;