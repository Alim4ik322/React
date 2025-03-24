import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
function App() {
	const [isBanned, setIsbanned] = useState(false);
	
	return <div>
		<span>{isBanned ? 'пользователь в бане' : 
			'пользователь разбанен'}</span> 
		<button onClick={() => setIsbanned(!isBanned)}>
			btn</button> 
	</div>;
}

export default App;
  