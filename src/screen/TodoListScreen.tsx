import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/redux-store/store';

export default function TodoListScreen() {
  const list = useSelector((state: RootState) => state.list || [{}]);
  
  return <div className="container">
    {list.map((item, index) => {
      return (
        <div key={index}>{item.text}</div>
      );
    })}
  </div>;
}
