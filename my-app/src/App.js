import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [ageGroup, setAgeGroup] = useState('');

	return (
		<div>
			<label>
				Выберите вашу возрастную группу:
				<select value={ageGroup} onChange={e => setAgeGroup(e.target.value)}>
					<option value="">-- выберите --</option>
					<option value="0-12">от 0 до 12 лет</option>
					<option value="13-17">от 13 до 17 лет</option>
					<option value="18-25">от 18 до 25 лет</option>
					<option value="25+">старше 25 лет</option>
				</select>
			</label>

			<p>
				{ageGroup === '0-12' && 'Вы относитесь к детской возрастной группе'}
				{ageGroup === '13-17' && 'Вы подросток'}
				{ageGroup === '18-25' && 'Вы молодой взрослый'}
				{ageGroup === '25+' && 'Вы взрослый старше 25 лет'}
			</p>
		</div>
	);
}



export default App;