import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	function getDigitsSum(num) {
		let sum = 0;
		while (num > 0) {
		  sum += num % 10; 
		  num = (num / 10) | 0; 
		}
		return sum;
	  }
	
	
	const sum = getDigitsSum(12345);
	
	return <div>
		<p>
			Ответ:{sum}
		</p>
	</div>
}
export default App;
  
  
