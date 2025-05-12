import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
	const [html, setHtml] = useState(false);
	const [css, setCss] = useState(false);
	const [js, setJs] = useState(false);

	return (
		<div>
			<label>
				<input
					type="checkbox"
					checked={html}
					onChange={() => setHtml(!html)}
				/>
				HTML
			</label>
			<br />
			<label>
				<input
					type="checkbox"
					checked={css}
					onChange={() => setCss(!css)}
				/>
				CSS
			</label>
			<br />
			<label>
				<input
					type="checkbox"
					checked={js}
					onChange={() => setJs(!js)}
				/>
				JS
			</label>
			<br />
			<p>HTML: {html ? 'знает' : 'не знает'}</p>
			<p>CSS: {css ? 'знает' : 'не знает'}</p>
			<p>JS: {js ? 'знает' : 'не знает'}</p>
		</div>
	);
}

export default App;