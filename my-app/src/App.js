import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c']);
	const [input, setInput] = useState('');
	const [selectedIndex, setSelectedIndex] = useState(null);

	function handleClick(index) {
		setSelectedIndex(index);
		setInput(notes[index]);
	}

	function handleBlur() {
		if (selectedIndex !== null) {
			const copy = [...notes];
			copy[selectedIndex] = input;
			setNotes(copy);
			setSelectedIndex(null);
			setInput('');
		}
	}

	return (
		<div>
			<ul>
				{notes.map((note, index) => (
					<li key={index} onClick={() => handleClick(index)}>
						{note}
					</li>
				))}
			</ul>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onBlur={handleBlur}
			/>
		</div>
	);
}

export default App;