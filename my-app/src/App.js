import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	const obj = {name: 'john', surname: 'smit'};
	
	return <div>
		<p>{obj.name}</p>
		<p>{obj.surname}</p>
	</div>;
}
export default App;
