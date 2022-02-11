import React, { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import TodoApi from '../lib/api/api';
import './../component/ListRow/ListRow.scoped.css';

export default function TodoListParseScreen() {
  const [todoArr, setTodoArr] = useState<any[]>([]);
  const [filteredArr, setFilteredArr] = useState<any[]>([]);
  const navigate = useNavigate();

  async function deleteFn(id: string) {
    await TodoApi.delete(`/classes/Todo/${id}`)
    .then(res => {
      const updatedList = todoArr.filter(item => item.objectId !== id);
      setTodoArr(updatedList);
    });
    alert("Item is deleted.");
  }

  const searchTodos = (v: string) => {
    if (v !== '') { 
      const filteredItem = todoArr.filter(item =>
        item.text.text.includes(v)
      );
      setFilteredArr(filteredItem);
    } else {
      setFilteredArr(todoArr);
    }
  }

  useEffect(() => {
    (async () => {
      const response = await TodoApi.get('/classes/Todo');
      setTodoArr(response.data.results);
    }) ()
  }, [setTodoArr])

  return <div className="container">
    <input type="text" placeholder="Search todo..." className="search-input"
    onChange={(e: any) => searchTodos(e.target.value)} />
    
    <h1>Listed Item from API call</h1>
    <div>
      <ol>
      {filteredArr.length > 0 ? (
        filteredArr.map((i, index) => {
          return (
            <li key={index} className="item-row">
              <span>
                <span>{index+1}.{' '}</span>
                {i.text.text}
              </span>
              <div>
              <button className="btn-warning btn" onClick={() => {navigate(`/api/edit/${i.objectId}`)}}>
                <FiEdit3 />
              </button>
              <button className="btn-danger btn" onClick={() => deleteFn(i.objectId)}>
                <RiDeleteBin6Line />
              </button>
            </div>
            </li>
          )
        })
      ) : (
            todoArr.map((i, index) => {
              return (
                <li key={index} className="item-row">
                  <span>
                    <span>{index+1}.{' '}</span>
                    {i.text.text}
                  </span>
                  <div>
                  <button className="btn-warning btn" onClick={() => {navigate(`/api/edit/${i.objectId}`)}}>
                    <FiEdit3 />
                  </button>
                  <button className="btn-danger btn" onClick={() => deleteFn(i.objectId)}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
                </li>
              )
            })
      )}
      
      </ol>
    </div>
  </div>;
}
