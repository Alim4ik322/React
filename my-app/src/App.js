import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	const isAdmin = true; 
	let content;
	if (isAdmin) {
	  content = (
		<div>
		  <p>Добро пожаловать, администратор!</p>
		  <p>Вы имеете доступ к дополнительным функциям.</p>
		</div>
	  );
	} else {
	  content = null; 
	} 
	return content; 
}  
export default App;
  
  
