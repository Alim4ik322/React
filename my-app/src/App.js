import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";
const initNotes = [
  {
    id: '1',
    prop1: 'value11',
    prop2: 'value12',
    prop3: 'value13',
  },
  {
    id: '2',
    prop1: 'value21',
    prop2: 'value22',
    prop3: 'value23',
  },
  {
    id: '3',
    prop1: 'value31',
    prop2: 'value32',
    prop3: 'value33',
  },
];
function App() {
	const [notes, setNotes] = useState(initNotes);
	const [input1, setInput1] = useState('');
	const [input2, setInput2] = useState('');
	const [input3, setInput3] = useState('');

	function addNote() {
		const newNote = {
			id: crypto.randomUUID(),
			prop1: input1,
			prop2: input2,
			prop3: input3,
		};
		setNotes([...notes, newNote]);
		setInput1('');
		setInput2('');
		setInput3('');
	}

	return (
		<div>
			<ul>
				{notes.map(note => (
					<li key={note.id}>
						<span>{note.prop1} </span>
						<span>{note.prop2} </span>
						<span>{note.prop3}</span>
					</li>
				))}
			</ul>

			<input
				value={input1}
				onChange={(e) => setInput1(e.target.value)}
				placeholder="prop1"
			/>
			<input
				value={input2}
				onChange={(e) => setInput2(e.target.value)}
				placeholder="prop2"
			/>
			<input
				value={input3}
				onChange={(e) => setInput3(e.target.value)}
				placeholder="prop3"
			/>

			<button onClick={addNote}>Добавить объект</button>
		</div>
	);
}
export default App;