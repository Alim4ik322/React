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
import styled from 'styled-components';

import Block from './Block';

function App() {
	return (
		<div>
			<Block />
		</div>
	);
}

export default App;
