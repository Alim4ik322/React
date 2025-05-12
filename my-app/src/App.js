import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

	function reverseOrder() {
		setNotes([...notes].reverse());
	}

	return (
		<div>
			<ul>
				{notes.map((note, index) => (
					<li key={index}>{note}</li>
				))}
			</ul>
			<button onClick={reverseOrder}>Перевернуть список</button>
		</div>
	);
}

export default App;