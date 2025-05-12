import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
function App() {
	const lastName1 = 'Кузнецов';
	const firstName1 = 'Алексей';
	const middleName1 = 'Викторович';
	const salary1 = '70000';

	const lastName2 = 'Смирнова';
	const firstName2 = 'Мария';
	const middleName2 = 'Павловна';
	const salary2 = '80000';

	const lastName3 = 'Тарасов';
	const firstName3 = 'Дмитрий';
	const middleName3 = 'Алексеевич';
	const salary3 = '75000';

	return (
		<div>
			<Employee
				lastName={lastName1}
				firstName={firstName1}
				middleName={middleName1}
				salary={salary1}
			/>
			<Employee
				lastName={lastName2}
				firstName={firstName2}
				middleName={middleName2}
				salary={salary2}
			/>
			<Employee
				lastName={lastName3}
				firstName={firstName3}
				middleName={middleName3}
				salary={salary3}
			/>
		</div>
	);
}


export default App;