import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import ErrorMessage from '../component/Errors';

export default function LoginScreen() {
  const loginFormSchema = yup.object().shape({
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
      <h1>Login here</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
        <label htmlFor="item" className="form-label">User Email</label>
        <input type="email" className="form-input"
        placeholder="Enter a text" {...register('email')} />
        {errors.text && <ErrorMessage message={errors.email.message} />}

        <label htmlFor="item" className="form-label">Password</label>
        <input type="password" className="form-input"
        placeholder="password" {...register('password')} />
        {errors.text && <ErrorMessage message={errors.password.message} />}

        <button className="btn-primary">
          Login
        </button>
      </form>
      <Link to={"/register"}>
        New User? Please click here.
      </Link>
    </div>
  )
}
