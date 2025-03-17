import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	function func(event, arg1, arg2) {
	  console.log(event, arg1, arg2);
	}
  
	return (
	  <div>
		<button onClick={event => func(event, 'eee', 'fff')}>act</button>
	  </div>
	);
}
export default App;
  
  
