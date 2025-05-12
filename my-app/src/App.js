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

// Стилизованный контейнер
const Container = styled.div`
	width: 200px;
	border: 2px solid brown;
	padding: 10px;
	text-align: center;
`;

// Первый абзац
const Text1 = styled.p`
	color: orangered;
	font-weight: bold;
`;

// Второй абзац
const Text2 = styled.p`
	font-style: italic;
	color: brown;
`;

// Третий абзац
const Text3 = styled.p`
	background-color: orange;
	font-weight: bold;
	color: white;
`;

function App() {
	return (
		<Container>
			<Text1>text</Text1>
			<Text2>text</Text2>
			<Text3>text</Text3>
		</Container>
	);
}

export default App;