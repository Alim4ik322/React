import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	const arr = [];
	
	for (let i = 0; i <= 9; i++) {
		arr.push(<li>{i}</li>);
	}
	
	return <div>
		{arr}
	</div>;
}
export default App;
  
  
