import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../component/Errors';
import { useNavigate, useParams } from "react-router-dom";
import TodoApi from '../lib/api/api';

export default function TodoFormApiScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    text: yup.string().required('This field is required')
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
   } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmit = async(text: object) => {
    try{
      if (id) {
        await TodoApi.put(`/classes/Todo/${id}`, {text});
        alert("Item is edited successfully.");
        navigate("/api/list");
      } else {
        await TodoApi.post('/classes/Todo', {
          text
        });
        reset();
        alert("Item is added to the list");
      }
    } catch(error) {
      alert(error);
    }
  }

  useEffect(() => {
    (async () => {
      const response = await TodoApi.get(`/classes/Todo/${id}`);
      setValue("text", response.data.text.text);
    }) ()
  }, [id, setValue]);

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
