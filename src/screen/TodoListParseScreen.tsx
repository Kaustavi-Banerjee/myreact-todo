import axios from 'axios';
import React, { useEffect } from 'react';

const HOST_URL = 'https://parseapi.back4app.com/classes/Todo';

export default function TodoListParseScreen() {

  useEffect(() => {
    axios.get(HOST_URL).then();
  }
  , []);

  return <div className="container">
    <h1>Listed Item</h1>
    
  </div>;
}
