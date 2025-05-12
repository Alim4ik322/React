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
	// для div:
	const wd1 = '200px';
	const br1 = '2px solid brown';
	const pd1 = '10px';
	const ta1 = 'center';

	// для первого p:
	const co1 = 'orangered';
	const fw1 = 'bold';

	// для второго p:
	const fs1 = 'italic';
	const co2 = 'brown';

	// для третьего p:
	const bco1 = 'orange';
	const co3 = 'white';

	return (
		<div style={{
			width: wd1,
			border: br1,
			padding: pd1,
			textAlign: ta1
		}}>
			<p style={{
				color: co1,
				fontWeight: fw1
			}}>
				text
			</p>
			<p style={{
				fontStyle: fs1,
				color: co2
			}}>
				text
			</p>
			<p style={{
				backgroundColor: bco1,
				fontWeight: fw1,
				color: co3
			}}>
				text
			</p>
		</div>
	);
}

export default App;