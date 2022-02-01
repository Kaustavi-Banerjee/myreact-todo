import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './component/Header';
//import Parse from 'parse';


//const PARSE_APPLICATION_ID = 'Uxu3E9Tj66dZlXhmULamLNmKwO1pLol4m7cGJfBp';
//const HOST_URL = 'https://parseapi.back4app.com/classes/Todo';
//const PARSE_JAVASCRIPT_KEY = 'GvuDKHi5O7M6TALEX4fc7s2x9MRrpnhtReXKU055';
//Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
//Parse.serverURL = HOST_URL;

const TodoList = React.lazy(() => import("./screen/TodoListScreen"));
const TodoForm = React.lazy(() => import("./screen/TodoFormScreen"));
const TodoListApi = React.lazy(() => import("./screen/TodoListParseScreen"));
const TodoFormApi = React.lazy(() => import("./screen/TodoFormApiScreen"));


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<>...</>}>
            <TodoList />
          </React.Suspense>} />
        <Route path="/create" element={
          <React.Suspense fallback={<>...</>}>
            <TodoForm />
          </React.Suspense>} />
        <Route path="/edit/:id" element={
          <React.Suspense fallback={<>...</>}>
            <TodoForm />
          </React.Suspense>} />
        <Route path="/api/list" element={
          <React.Suspense fallback={<>...</>}>
            <TodoListApi />
          </React.Suspense>} />
        <Route path="/api/create" element={
          <React.Suspense fallback={<>...</>}>
            <TodoFormApi />
          </React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
