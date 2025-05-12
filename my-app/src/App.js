import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [city, setCity] = useState('');

	function handleChange(event) {
		setCity(event.target.value);
	}

	return (
		<div>
			<label>
				Выберите город:
				<select value={city} onChange={handleChange}>
					<option value="">-- выберите --</option>
					<option value="Москва">Москва</option>
					<option value="Санкт-Петербург">Санкт-Петербург</option>
					<option value="Казань">Казань</option>
					<option value="Новосибирск">Новосибирск</option>
				</select>
			</label>
			<p>Ваш выбор: {city}</p>
		</div>
	);
}



export default App;