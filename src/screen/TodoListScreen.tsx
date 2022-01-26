import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListRow from '../component/ListRow';
import { deleteItem } from '../lib/redux-store/reducers/listSlice';
import { RootState } from '../lib/redux-store/store';

export default function TodoListScreen() {
  const list = useSelector((state: RootState) => state.list.todoItem || []);
  const dispatch = useDispatch();

  const deleteFn = (id: number) => {
    dispatch(deleteItem(id));
    alert('Item is deleted successfully.');
  }

  return <div className="container">
    <h1>Listed Item</h1>
    {list.map((item, index) => {
      return (
        <ListRow item={item} key={index} deleteFn={() => deleteFn(item.id)} />
      );
    })}
  </div>;
}
