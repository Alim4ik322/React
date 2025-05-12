import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [input, setInput] = useState('');

	function addNote() {
		if (input.trim() !== '') {
			setNotes([...notes, input]);
			setInput('');
		}
	}

	return (
		<div>
			<ul>
				{notes.map((note, index) => (
					<li key={index}>{note}</li>
				))}
			</ul>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={addNote}>Добавить элемент</button>
		</div>
	);
}
export default App;