import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [language, setLanguage] = useState('');

	function handleChange(event) {
		setLanguage(event.target.value);
	}

	return (
		<div>
			<p>Ваш любимый язык программирования:</p>
			<input
				type="radio"
				name="lang"
				value="JavaScript"
				checked={language === 'JavaScript'}
				onChange={handleChange}
			/> JavaScript
			<input
				type="radio"
				name="lang"
				value="Python"
				checked={language === 'Python'}
				onChange={handleChange}
			/> Python
			<input
				type="radio"
				name="lang"
				value="C++"
				checked={language === 'C++'}
				onChange={handleChange}
			/> C++

			<p>
				Ваш выбор: {language}
				{language === 'JavaScript' && ' — Отличный выбор! 💪'}
			</p>
		</div>
	);
}
export default App;