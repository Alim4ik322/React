import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	function func1(event) {
		console.log(event); // объект 
	}
	function func2(event) {
		console.log(event.target); // Выводим элемент, на который кликнули
	  }
	
	return <div>
		    <button onClick={func1}>Вывести объект события</button>
			<button onClick={func2}>Вывести элемент клика</button>
	</div>;
}
export default App;
  
  
