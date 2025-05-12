import React, { useState } from 'react';
import User from './User';
import { nanoid as id } from 'nanoid';

const initUsers = [
  { id: 1, name: 'John', surname: 'Smith', age: 30 },
  { id: 2, name: 'Ann', surname: 'Snow', age: 25 },
  { id: 3, name: 'Pete', surname: 'Brown', age: 40 }
];

function Users() {
  const [users, setUsers] = useState(initUsers);

  function changeField(id, field, event) {
    const value = field === 'age' ? +event.target.value : event.target.value;
    setUsers(users.map(user =>
      user.id === id
        ? { ...user, [field]: value }
        : user
    ));
  }

  const rows = users.map(user => (
    <User
      key={user.id}
      {...user}
      changeField={changeField}
    />
  ));

  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default Users;
