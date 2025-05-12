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
		<div style={styles.class1}>
			<p style={styles.class2}>text</p>
			<p style={styles.class3}>text</p>
			<p style={styles.class4}>text</p>
		</div>
	);
}

export default App;
