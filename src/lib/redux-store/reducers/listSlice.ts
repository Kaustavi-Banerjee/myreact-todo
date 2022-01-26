import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../../interface/Todo.interface';

let itemId: number = 0;

let todo: Todo = {
  todoItem: [{
    id: 0,
    text: 'Abcd Xyz'
  }]
}

export const listSlice = createSlice({
  name: 'todo-list',
  initialState: todo,
  reducers: {
    addItem: (state: Todo, action) => {
      const newItem = {
        id: ++itemId,
        text: action.payload.text
      }
      state.todoItem.push(newItem);
    },
    editItem: (state: Todo, action) => {
      state.todoItem = state.todoItem.map((item) => {
        if (item.id === Number(action.payload.id)) {
          return {
            ...item,
            text: action.payload.text
          }
        }
        return item;
      })
    },
    deleteItem: (state: Todo, action) => {
      state.todoItem = state.todoItem.filter((item) => 
        item.id !== action.payload   
      )
    }
  }
});

export const { addItem, editItem, deleteItem } = listSlice.actions;

export default listSlice.reducer;