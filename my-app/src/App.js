import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
// ❌ Удалено: import { useState } from "react";

function App() {
    const [value, setValue] = useState('');
    const [sum, setSum] = useState(0);

    function handleChange(event) {
        const newValue = event.target.value;
        setValue(newValue);

        const numbers = newValue.split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line !== '')
            .map(Number);

        console.log("Исходный ввод:", newValue);
        console.log("Массив чисел:", numbers);
        console.log("Рассчитанная сумма:", numbers.reduce((acc, num) => acc + num, 0));

        setSum(numbers.reduce((acc, num) => acc + num, 0));
    }

    return (
        <div>
            <textarea value={value} onChange={handleChange} />
            <p>Сумма: {sum}</p>
        </div>
    );
}
export default App;