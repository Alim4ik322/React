import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	const arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  
	const res = arr.map(function(item, index) {
	  return <p key={index}>{item}</p>;
	});
  
	return <div>{res}</div>;
  }
export default App;
  
  
