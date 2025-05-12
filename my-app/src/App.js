import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';
import User from './User';
import Employee from './Employee';
import Users from './Users';
import { nanoid as id } from 'nanoid';

function CheckboxList({ items, checkedItems, onChange }) {
  return (
    <div>
      {items.map((item, index) => (
        <label key={item}>
          <input
            type="checkbox"
            checked={checkedItems[index]}
            onChange={() => {
              const newChecked = [...checkedItems];
              newChecked[index] = !newChecked[index];
              onChange(newChecked);
            }}
          />
          {item}
        </label>
      ))}
    </div>
  );
}

function SelectAll() {
  const items = ['яблоко', 'банан', 'вишня'];
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const allSelected = checkedItems.every(Boolean);

  const toggleAll = () => {
    const newValue = !allSelected;
    setCheckedItems(Array(items.length).fill(newValue));
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={allSelected} onChange={toggleAll} />
        Выбрать всё
      </label>
      <CheckboxList
        items={items}
        checkedItems={checkedItems}
        onChange={setCheckedItems}
      />
    </div>
  );
}

export default SelectAll;
