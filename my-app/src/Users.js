import React, { useState } from 'react';
import User from './User';
import { nanoid as id } from 'nanoid';

const initUsers = [
  { id: id(), name: 'John', surname: 'Doe', age: 30, isEdit: false },
  { id: id(), name: 'Jane', surname: 'Smith', age: 25, isEdit: false },
  { id: id(), name: 'Mike', surname: 'Brown', age: 28, isEdit: false },
];

function Users() {
  const [users, setUsers] = useState(initUsers);

  function toggleMode(id) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user.isEdit = !user.isEdit;
      }
      return user;
    }));
  }

  function editUser(id, field, event) {
    const value = field === 'age' ? Number(event.target.value) : event.target.value;
    setUsers(users.map(user => {
      if (user.id === id) {
        user[field] = value;
      }
      return user;
    }));
  }

  const list = users.map(user => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      surname={user.surname}
      age={user.age}
      isEdit={user.isEdit}
      toggleMode={toggleMode}
      editUser={editUser}
    />
  ));

  return <div>{list}</div>;
}


export default Users;
