import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';
import { styles } from './styles'; // Импорт объекта со стилями

function App() {
	return (
		<div style={{
			width: '200px',
			border: '2px solid brown',
			padding: '10px',
			textAlign: 'center',
		}}>
			<p style={{
				color: 'orangered',
				fontWeight: 'bold',
			}}>
				text
			</p>
			<p style={{
				fontStyle: 'italic',
				color: 'brown',
			}}>
				text
			</p>
			<p style={{
				backgroundColor: 'orange',
				fontWeight: 'bold',
				color: 'white',
			}}>
				text
			</p>
		</div>
	);
}

export default App
