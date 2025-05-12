import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

	function remove(index) {
		const copy = [...notes];
		copy.splice(index, 1);
		setNotes(copy);
	}

	return (
		<ul>
			{notes.map((note, index) => (
				<li key={index}>
					{note} <button onClick={() => remove(index)}>Удалить</button>
				</li>
			))}
		</ul>
	);
}

export default App;