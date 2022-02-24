import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ErrorMessage from '../component/Errors';

export default function RegisterScreen() {
  const loginFormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginFormSchema)
  });

  const onSubmit = () => {
    console.log('Submit');
  }

  return (
    <div className="container">
      <h1>Register here</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
        <label htmlFor="item" className="form-label">Name</label>
        <input type="text" className="form-input"
        placeholder="Enter a text" {...register('name')} />
        {errors.text && <ErrorMessage message={errors.name.message} />}

        <label htmlFor="item" className="form-label mt-4">Email</label>
        <input type="email" className="form-input"
        placeholder="Enter a text" {...register('email')} />
        {errors.text && <ErrorMessage message={errors.email.message} />}

        <label htmlFor="item" className="form-label mt-4">Password</label>
        <input type="password" className="form-input"
        placeholder="password" {...register('password')} />
        {errors.text && <ErrorMessage message={errors.password.message} />}

        <button className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
