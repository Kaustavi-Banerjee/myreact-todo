import React, { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import TodoApi from '../lib/api/api';
import './../component/ListRow/ListRow.scoped.css';

export default function TodoListParseScreen() {
  const [todoArr, setTodoArr] = useState<any[]>([]);
  
  useEffect(() => {
    (async () => {
      const response = await TodoApi.get('/classes/Todo');
      setTodoArr(response.data.results);
      console.log(response.data.results);
    }) ()
  }, [setTodoArr])

  return <div className="container">
    <h1>Listed Item</h1>
    <div>
      <ol>
      {todoArr.map((i, index) => {
        return (
          <li key={index} className="item-row">
            <span>
              <span>{index+1}.{' '}</span>
              {i.text.text}
            </span>
            <div>
            <button className="btn-warning btn" onClick={() => { }}>
              <FiEdit3 />
            </button>
            <button className="btn-danger btn" onClick={() => { }}>
              <RiDeleteBin6Line />
            </button>
          </div>
          </li>
        )
      })}
      </ol>
    </div>
  </div>;
}
