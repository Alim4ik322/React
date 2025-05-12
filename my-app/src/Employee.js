import React from 'react';

function Employee({ lastName, firstName, middleName, salary }) {
	return (
		<div>
			<p>ФИО: {lastName} {firstName} {middleName}</p>
			<p>Зарплата: {salary} руб.</p>
			<hr />
		</div>
	);
}

export default Employee;
