import React from 'react';

function User({ id, name, surname, age }) {
	return (
		<div>
			<p>
				ID: <strong>{id}</strong>, Имя: <strong>{name}</strong>, Фамилия: <strong>{surname}</strong>, Возраст: <strong>{age}</strong>
			</p>
		</div>
	);
}

export default User;