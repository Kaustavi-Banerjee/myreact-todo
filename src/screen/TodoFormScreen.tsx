import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../component/Errors';
import { useDispatch } from 'react-redux';
import { addItem } from '../lib/redux-store/reducers/listSlice';
import { useNavigate } from "react-router-dom";

export default function TodoFormScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const onSubmit = (text: object) => {
    dispatch(addItem(text));
    console.log(text);
    reset();
    navigate("/");
  }

  return <div className="container">
    <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Add new item</h1>

      <label htmlFor="item" className="form-label">Item name</label>
      <input type="text" className="form-input"
      placeholder="Enter a text" {...register('text')} />
      {errors.text && <ErrorMessage message={errors.text.message} />}

      <button className="btn-primary">
        Submit
      </button>
    </form>

  </div>;
}
