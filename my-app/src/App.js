import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import { nanoid as id } from 'nanoid';

function App() {
	const users = [
		{ id: id(), name: 'user1', surn: 'surn1', age: 30 },
		{ id: id(), name: 'user2', surn: 'surn2', age: 31 },
		{ id: id(), name: 'user3', surn: 'surn3', age: 32 },
	];

	return (
		<table border="1">
			<thead>
				<tr>
					<th>Имя</th>
					<th>Фамилия</th>
					<th>Возраст</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => (
					<User
						key={user.id}
						name={user.name}
						surn={user.surn}
						age={user.age}
					/>
				))}
			</tbody>
		</table>
	);
}


export default App;