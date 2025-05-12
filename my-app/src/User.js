import React from 'react';

function User({ id, name, surname, age, banned, banUser }) {
	return (
		<div style={{ marginBottom: '10px' }}>
			<p>
				ID: {id}, Имя: {name}, Фамилия: {surname}, Возраст: {age}, 
				Статус: <strong>{banned ? 'ЗАБАНЕН' : 'Активен'}</strong>
			</p>
			{!banned && (
				<button onClick={() => banUser(id)}>Забанить</button>
			)}
		</div>
	);
}

export default User;
