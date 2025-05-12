import React from 'react';

function User({ name, surname, age }) {
	return (
		<div>
			<p>
				Имя: <strong>{name}</strong>, Фамилия: <strong>{surname}</strong>, Возраст: <strong>{age}</strong>
			</p>
		</div>
	);
}

export default User;
