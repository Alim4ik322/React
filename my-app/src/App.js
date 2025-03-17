import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	const age = 19;
	
	return <div>
		{age >18 ? <p>вы совершеннолетний</p> : <p>вы несовершеннолетний</p>}
	</div>;
}  
export default App;
  
  
