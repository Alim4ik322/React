import React from 'react';
import styled from 'styled-components';

// Стилизованный контейнер
const Container = styled.div`
	display: flex;
	gap: 10px;
	padding: 20px;
	justify-content: center;
`;

// Стилизованная кнопка
const Button = styled.button`
	padding: 10px 15px;
	font-size: 16px;
	background-color: #3498db;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`;

function Block() {
	return (
		<Container>
			<Button disabled>Кнопка 1</Button>
			<Button>Кнопка 2</Button>
			<Button type="reset">Кнопка 3</Button>
		</Container>
	);
}

export default Block;