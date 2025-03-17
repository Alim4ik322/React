import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	const hide = false;
	
	return <div>
		{!hide && <p>пожалуйста, авторизуйтесь</p>}
	</div>;
}
export default App;
  
  
