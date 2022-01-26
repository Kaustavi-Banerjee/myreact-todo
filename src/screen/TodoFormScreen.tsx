import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../component/Errors';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, editItem } from '../lib/redux-store/reducers/listSlice';
import { useParams } from "react-router-dom";
import { RootState } from '../lib/redux-store/store';

export default function TodoFormScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const editTodo = useSelector((state: RootState) => state.list.todoItem);

  const formSchema = yup.object().shape({
    text: yup.string().required('This field is required')
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
   } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmit = (text: object) => {
    if (id) {
      dispatch(editItem({...text, id}));
    } else {
      dispatch(addItem(text));
      reset();
    }
  }

  useEffect(() => {
    if (id) {
      const items = editTodo.find(item => item.id === +id);
      setValue("text", items?.text);
    }
  }, [id, editTodo, setValue]);

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
