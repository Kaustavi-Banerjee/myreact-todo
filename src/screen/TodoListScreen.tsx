import React from 'react';
import { useSelector } from 'react-redux';
import ListRow from '../component/ListRow';
import { RootState } from '../lib/redux-store/store';

export default function TodoListScreen() {
  const list = useSelector((state: RootState) => state.list || [{}]);

  return <div className="container">
    <h1>Listed Item</h1>
    {list.map((item, index) => {
      return (
        <ListRow item={item} key={index} />
      );
    })}
  </div>;
}
