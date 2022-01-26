import { createSlice } from '@reduxjs/toolkit';

let itemId: number = 0;

export const listSlice = createSlice({
  name: 'listItem',
  initialState: [{id: 0, text: 'Test item'}],
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: ++itemId,
        text: action.payload.text
      }
      state.push(newItem);
    },
    editItem: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text
          }
        }
        return todo;
      })
    }
  }
});

export const { addItem, editItem } = listSlice.actions;

export default listSlice.reducer;