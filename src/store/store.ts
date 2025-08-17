import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import noteReducer from './slice/noteSlice';

const store = configureStore({
  reducer: {
    notes: noteReducer,
    auth: authReducer,
  },
});
export default store;
