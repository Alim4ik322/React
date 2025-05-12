import React from 'react';
function User({ id, name, surname, age, isEdit, toggleMode, editUser }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div>
        Имя: {
          isEdit
            ? <input value={name} onChange={e => editUser(id, 'name', e)} />
            : <span>{name}</span>
        }
      </div>

      <div>
        Фамилия: {
          isEdit
            ? <input value={surname} onChange={e => editUser(id, 'surname', e)} />
            : <span>{surname}</span>
        }
      </div>

      <div>
        Возраст: {
          isEdit
            ? <input type="number" value={age} onChange={e => editUser(id, 'age', e)} />
            : <span>{age}</span>
        }
      </div>

      <button onClick={() => toggleMode(id)}>
        {isEdit ? 'Сохранить' : 'Редактировать'}
      </button>
    </div>
  );
}

export default User;
