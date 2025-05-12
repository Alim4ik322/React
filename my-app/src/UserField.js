function UserField({ id, value, field, isEdit, editUser }) {
  return isEdit
    ? <input
        type={field === 'age' ? 'number' : 'text'}
        value={value}
        onChange={e => editUser(id, field, e)}
      />
    : <span>{value}</span>;
}

export default UserField;
