import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	let text;
	const isAdult = true;
	
	if (isAdult) {
		text = <p>Вы совершеннолетний</p>;
	}
	else {
		text = <p>Вы несовершеннолетний.</p>;
	}
	
	return <div>
		{text}
	</div>;
}
  
export default App;
