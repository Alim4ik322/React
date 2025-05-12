import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";


function App() {
	const [visible, setVisible] = useState(false);

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={visible}
					onChange={() => setVisible(!visible)}
				/>
				Показать абзац
			</label>

			{visible && <p>Это абзац, который можно показать или скрыть</p>}
		</div>
	);
}


export default App;