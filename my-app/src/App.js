import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
function tocel(num) {
	return ((num-32)*5)/9;
}

function App() {
	const [value, setValue] = useState(0);
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<input value={value} onChange={handleChange} 
			/> 
		<p>{tocel(value)}</p>
	</div>;
}

export default App;
  