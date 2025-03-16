import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	const num1 = 3;
	const num2 = 2;
	const name = 'john';
	const surname = 'smit';
	const num = 4;
	return <div>
		<p>Задание 1</p>
		<p>result: {num1 ** num2}</p>
		<p>Задание 2</p>
		<p>result: {name + ' ' + surname}</p>
		<p>Задание 3</p>
		<p>result: {Math.sqrt(num)}</p>
	</div>;
}
export default App;
