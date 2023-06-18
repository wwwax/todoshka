import { createSlice, configureStore } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {},
});

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;

export const todosAction = todosSlice.actions;
