import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './component/Header';

const Login = React.lazy(() => import("./screen/LoginScreen"));
const Register = React.lazy(() => import("./screen/RegisterScreen"));
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
            <Login />
          </React.Suspense>} />
        <Route path="/register" element={
          <React.Suspense fallback={<>...</>}>
            <Register />
          </React.Suspense>} />
        <Route path="/list" element={
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
        <Route path="/api/edit/:id" element={
          <React.Suspense fallback={<>...</>}>
            <TodoFormApi />
          </React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
