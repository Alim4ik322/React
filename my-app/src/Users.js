import React, { useState } from 'react';
import User from './User';
import { nanoid as id } from 'nanoid';

const initUsers = [
  { id: 1, name: 'John', surname: 'Smith', age: 30, isEdit: false },
  { id: 2, name: 'Ann', surname: 'Snow', age: 25, isEdit: false },
  { id: 3, name: 'Pete', surname: 'Brown', age: 40, isEdit: false }
];

function Users() {
  const [users, setUsers] = useState(initUsers);

  function toggleMode(id) {
    setUsers(users.map(user =>
      user.id === id
        ? { ...user, isEdit: !user.isEdit }
        : user
    ));
  }

  function editUser(id, field, event) {
    const value = field === 'age'
      ? +event.target.value
      : event.target.value;

    setUsers(users.map(user =>
      user.id === id
        ? { ...user, [field]: value }
        : user
    ));
  }

  const items = users.map(user => (
    <User
      key={user.id}
      {...user}
      toggleMode={toggleMode}
      editUser={editUser}
    />
  ));

  return <div>{items}</div>;
}

export default Users;
