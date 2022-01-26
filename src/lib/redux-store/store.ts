import { configureStore } from '@reduxjs/toolkit';
import listReducer from './reducers/listSlice';

function saveToLocalStorage(state: object) {
  try {
    const storedItem = JSON.stringify(state);
    localStorage.setItem("itemList", storedItem);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const showItem = localStorage.getItem("itemList");
    if (showItem === null) return undefined;
    return JSON.parse(showItem);
  } catch (e) {
    console.log(e);
  }
}

const store = configureStore({
  reducer: {
    list: listReducer
  },
  preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;