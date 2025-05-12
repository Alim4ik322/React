import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";


function App() {
	const [text, setText] = useState('');

	const translitMap = {
		а: 'a', б: 'b', в: 'v', г: 'g', д: 'd',
		е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i',
		й: 'y', к: 'k', л: 'l', м: 'm', н: 'n',
		о: 'o', п: 'p', р: 'r', с: 's', т: 't',
		у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch',
		ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '',
		э: 'e', ю: 'yu', я: 'ya'
	};

	function transliterate(str) {
		return str.split('').map(char => {
			const lower = char.toLowerCase();
			const isUpper = char !== lower;
			const trans = translitMap[lower] || char;
			return isUpper ? trans.charAt(0).toUpperCase() + trans.slice(1) : trans;
		}).join('');
	}

	return (
		<div>
			<textarea value={text} onChange={e => setText(e.target.value)} />
			<p>{transliterate(text)}</p>
		</div>
	);
}
export default App;