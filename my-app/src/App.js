import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
function App() {
	return (
		<div>
			<Employee
				lastName="Иванов"
				firstName="Иван"
				middleName="Иванович"
				salary="50000"
			/>
			<Employee
				lastName="Петров"
				firstName="Пётр"
				middleName="Петрович"
				salary="60000"
			/>
			<Employee
				lastName="Сидоров"
				firstName="Сидор"
				middleName="Сидорович"
				salary="55000"
			/>
		</div>
	);
}

export default App;