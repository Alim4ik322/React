import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';

function Item({ item, isFavorite, toggleFavorite }) {
  return (
    <div style={{ border: '1px solid gray', margin: 5, padding: 5 }}>
      <p>{item.name}</p>
      <button onClick={() => toggleFavorite(item.id)}>
        {isFavorite ? 'Убрать из избранного' : 'В избранное'}
      </button>
    </div>
  );
}

function FavoriteList() {
  const initialItems = [
    { id: 1, name: 'Книга' },
    { id: 2, name: 'Ноутбук' },
    { id: 3, name: 'Кофе' }
  ];

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(favs =>
      favs.includes(id) ? favs.filter(fid => fid !== id) : [...favs, id]
    );
  };

  return (
    <div>
      <h3>Все товары</h3>
      {initialItems.map(item => (
        <Item
          key={item.id}
          item={item}
          isFavorite={favorites.includes(item.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}

      <h3>Избранное</h3>
      <ul>
        {initialItems
          .filter(item => favorites.includes(item.id))
          .map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default FavoriteList;