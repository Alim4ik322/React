import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	function func(arg1, event, arg2) {
	  console.log(arg1, event, arg2);
	}
  
	return (
	  <div>
		<button onClick={event => func('eee', event, 'fff')}>act</button>
	  </div>
	);
  }
export default App;
  
  
