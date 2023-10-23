import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import tasksSlice from './slices/tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tasks: tasksSlice
  },
})