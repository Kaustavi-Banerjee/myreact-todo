import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../component/Errors';
import { useNavigate, useParams } from "react-router-dom";
//import axios from 'axios';
import TodoApi from '../lib/api/api';

export default function TodoFormApiScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todos, setTodos] = useState();
  //const dispatch = useDispatch();
  //const editTodo = useSelector((state: RootState) => state.list.todoItem);

  const formSchema = yup.object().shape({
    text: yup.string().required('This field is required')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
   } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmit = async(text: object) => {
    try{
      if (id) {
        alert("Item is edited successfully.");
        navigate("/");
      } else {
        const data = await TodoApi.post('/classes/Todo', {
          text
        });
        console.log(data.data);
        reset();
        alert("Item is added to the list");
      }
    } catch(error) {
      alert(error);
    }
  }

  

  return <div className="container">
    <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>{id ? "Edit item" : "Add new item"}</h1>

      <label htmlFor="item" className="form-label">Item name</label>
      <input type="text" className="form-input"
      placeholder="Enter a text" {...register('text')} />
      {errors.text && <ErrorMessage message={errors.text.message} />}

      <button className="btn-primary">
        {id ? 'Update' : 'Submit'}
      </button>
    </form>

  </div>;
}
