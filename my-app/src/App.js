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
		<div>
			<table border="1">
				<thead>
					<tr>
						<th>Имя</th>
						<th>Фамилия</th>
						<th>Возраст</th>
					</tr>
				</thead>
				<tbody>
					<User name={users[0].name} surn={users[0].surn} age={users[0].age} />
					<User name={users[1].name} surn={users[1].surn} age={users[1].age} />
					<User name={users[2].name} surn={users[2].surn} age={users[2].age} />
				</tbody>
			</table>
		</div>
	);
}

export default App;