import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './component/Header';

const TodoList = React.lazy(() => import("./screen/TodoListScreen"));
const TodoForm = React.lazy(() => import("./screen/TodoFormScreen"));


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
      </Routes>
    </div>
  );
}

export default App;
