import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
function App() {
	const [count, setCount] = useState(0);
	
	return <div>
		<span>{count}</span>
    <span>       </span>
		<button onClick={() => setCount(count 
			+ 1)}>+</button> 
      <button onClick={() => setCount(count 
			- 1)}>-</button> 
	</div>;
}

export default App;
  