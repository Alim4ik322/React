import logo from './logo.svg';
import './App.css';
import React from 'react';
const users = [
	{id: 1, name: 'user1', surn: 'surn1', age: 30}, 
	{id: 2, name: 'user2', surn: 'surn2', age: 31}, 
	{id: 3, name: 'user3', surn: 'surn3', age: 32}, 
];
function App() {
	const res = users.map(function(item, index) {
		return <p key={item.id}>
			<span>{item.name}</span>:
			<span>{item.surn}</span>:
			<span>{item.age}</span>
		</p>;
	});
	
	return <div>
		{res}
	</div>;
}
export default App;
  
  
