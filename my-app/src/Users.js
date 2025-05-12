import React, { useState } from 'react';
import User from './User';
import { nanoid as id } from 'nanoid';

const initUsers = [
	{ id: id(), name: 'user1', surname: 'surn1', age: 30, banned: false },
	{ id: id(), name: 'user2', surname: 'surn2', age: 31, banned: false },
	{ id: id(), name: 'user3', surname: 'surn3', age: 32, banned: false },
];

function Users() {
	const [users, setUsers] = useState(initUsers);

	function banUser(id) {
		setUsers(users.map(user => {
			if (user.id === id) {
				user.banned = true;
			}
			return user;
		}));
	}

	const items = users.map(user => (
		<User
			key={user.id}
			id={user.id}
			name={user.name}
			surname={user.surname}
			age={user.age}
			banned={user.banned}
			banUser={banUser}
		/>
	));

	return <div>{items}</div>;
}

export default Users;
