import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../component/Errors';

export default function TodoFormScreen() {
  const formSchema = yup.object().shape({
    text: yup.string().required('This field is required')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
   } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmit = (text: object) => {
    console.log(text);
    return text;
  }

  return <div className="container">
    <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Add new item</h1>

      <label htmlFor="item" className="form-label">Item name</label>
      <input type="text" className="form-input" {...register('text')} />
      {errors.text && <ErrorMessage message={errors.text.message} />}

      <button className="btn-primary">
        Submit
      </button>
    </form>
  </div>;
}
