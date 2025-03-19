import logo from './logo.svg';
import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
const users = [
    { id: uuid(), name: 'user1', age: 25 },
    { id: uuid(), name: 'user2', age: 30 },
    { id: uuid(), name: 'user3', age: 22 },
    { id: uuid(), name: 'user4', age: 28 },
    { id: uuid(), name: 'user5', age: 35 },
  ];
function App() {
  const res = users.map(function(item, index) {
    return <p key={index}>
        <span>{item.id}</span>
        <span>       </span>
        <span>{item.name}</span>
        <span>      </span>
        <span>{item.surn}</span>
        <span>       </span>
        <span>{item.age}</span>
    </p>;
});
return <div>
    {res}
</div>;
}

export default App;
  