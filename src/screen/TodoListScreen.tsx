import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListRow from '../component/ListRow';
import { deleteItem } from '../lib/redux-store/reducers/listSlice';
import { RootState } from '../lib/redux-store/store';

export default function TodoListScreen() {
  const list = useSelector((state: RootState) => state.list.todoItem || []);
  const dispatch = useDispatch();
  const [filteredArr, setFilteredArr] = useState<any[]>([]);

  const deleteFn = (id: number) => {
    dispatch(deleteItem(id));
    alert('Item is deleted successfully.');
  }

  const searchTodos = (v: string) => {
    if (v !== '') {
      const filteredItem = list.filter(item => item.text.includes(v));
      setFilteredArr(filteredItem);
    } else {
      setFilteredArr(list);
    }
  }

  return <div className="container">
    <input type="text" placeholder="Search todo..." className="search-input"
    onChange={(e: any) => searchTodos(e.target.value)} />

    <h1>Listed Item from LocalStorage call</h1>
    {filteredArr.length > 0 ? (
      filteredArr.map((item, index) => {
        return (
          <ListRow item={item} key={index} deleteFn={() => deleteFn(item.id)} />
        );
      })
    ) : (
      list.map((item, index) => {
        return (
          <ListRow item={item} key={index} deleteFn={() => deleteFn(item.id)} />
        );
      })
    )}
  </div>;
}
