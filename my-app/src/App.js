import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [notes] = useState(['a', 'b', 'c']);
	const [input, setInput] = useState('');

	function handleClick(note) {
		setInput(note);
	}

	return (
		<div>
			<ul>
				{notes.map((note, index) => (
					<li key={index} onClick={() => handleClick(note)}>
						{note}
					</li>
				))}
			</ul>
			<input value={input} onChange={(e) => setInput(e.target.value)} />
		</div>
	);
}

export default App;