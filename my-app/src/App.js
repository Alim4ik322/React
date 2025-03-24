import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';

function App() {
	const[name, setName]=useState('xxxx')
  const[surname, setSurname]=useState('xxxx')
  const[age, setAge]=useState('xxxx')
	
	return <div>
    <span>{name}</span>
    <span>      </span>
    <span>{surname}</span>
    <span>      </span>
    <span>{age}</span>
    <span>      </span>
		<button onClick={() => setName('John')}>
			btn</button> 
    <span>      </span>
    <button onClick={() => setSurname('Johnson')}>
			btn</button> 
    <button onClick={() => setAge('38')}>
			btn</button> 
	</div>;
}

export default App;
  