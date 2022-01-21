import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'listItem',
  initialState: [{}],
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Math.floor(Math.random()),
        text: action.payload.text
      }
      state.push(newItem);
    }
  }
});

export const { addItem } = listSlice.actions;

export default listSlice.reducer;