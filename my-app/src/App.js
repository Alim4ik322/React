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
	const class1 = {
		width: '200px',
		border: '2px solid brown',
		padding: '10px',
		textAlign: 'center',
	};

	const class2 = {
		color: 'orangered',
		fontWeight: 'bold',
	};

	const class3 = {
		fontStyle: 'italic',
		color: 'brown',
	};

	const class4 = {
		backgroundColor: 'orange',
		fontWeight: 'bold',
		color: 'white',
	};

	return (
		<div style={class1}>
			<p style={class2}>text</p>
			<p style={class3}>text</p>
			<p style={class4}>text</p>
		</div>
	);
}
export default App;
