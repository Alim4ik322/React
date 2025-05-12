import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

	function square(index) {
		const copy = [...notes];
		copy[index] = copy[index] ** 2;
		setNotes(copy);
	}

	return (
		<ul>
			{notes.map((note, index) => (
				<li key={index} onClick={() => square(index)}>
					{note}
				</li>
			))}
		</ul>
	);
}

export default App;