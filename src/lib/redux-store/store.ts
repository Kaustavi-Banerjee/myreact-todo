import { configureStore } from '@reduxjs/toolkit';
import listReducer from './reducers/listSlice';

function saveToLocalStorage(state: object) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("itemList", serialisedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("itemList");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.log(e);
    return undefined;
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