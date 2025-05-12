import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';

function App() {
	return (
		<div>
			<h1>Список пользователей</h1>
			<Users />
		</div>
	);
}

export default App;