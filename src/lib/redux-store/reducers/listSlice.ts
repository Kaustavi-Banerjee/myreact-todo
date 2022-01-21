import { createSlice } from '@reduxjs/toolkit';

let itemId: number = 0;

export const listSlice = createSlice({
  name: 'listItem',
  initialState: [{id: 0, text: ''}],
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: ++itemId,
        text: action.payload.text
      }
      state.push(newItem);
    }
  }
});

export const { addItem } = listSlice.actions;

export default listSlice.reducer;