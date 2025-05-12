import React from 'react';
import UserField from './UserField';

function User({ id, name, surname, age, isEdit, toggleMode, editUser }) {
  return (
    <div>
      name: <UserField
        id={id}
        value={name}
        field="name"
        isEdit={isEdit}
        editUser={editUser}
      />,{' '}

      surname: <UserField
        id={id}
        value={surname}
        field="surname"
        isEdit={isEdit}
        editUser={editUser}
      />,{' '}

      age: <UserField
        id={id}
        value={age}
        field="age"
        isEdit={isEdit}
        editUser={editUser}
      />{' '}

      <button onClick={() => toggleMode(id)}>
        {isEdit ? 'save' : 'edit'}
      </button>
    </div>
  );
}

export default User;
