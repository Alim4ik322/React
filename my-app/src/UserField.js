import { useState } from 'react';

function UserField({ id, text, type, changeField }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <td>
      {isEdit ? (
        <input
          type={type === 'age' ? 'number' : 'text'}
          value={text}
          onChange={event => changeField(id, type, event)}
          onBlur={() => setIsEdit(false)}
          autoFocus
        />
      ) : (
        <span onClick={() => setIsEdit(true)}>{text}</span>
      )}
    </td>
  );
}

export default UserField;
