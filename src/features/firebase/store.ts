import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './itemsSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
