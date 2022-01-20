import React from 'react';

interface FormInput {
  id: number,
  text: string
}

export default function TodoFormScreen() {
  const onSubmit = (v: FormInput) => {
    console.log(v);
  }

  return <div className="container">
    <form className="todo-form" onSubmit={() => onSubmit}>
      <h1>Add new item</h1>

      <label htmlFor="item" className="form-label">Item name</label>
      <input type="text" className="form-input" />

      <button className="btn-primary">
        Submit
      </button>
    </form>
  </div>;
}
