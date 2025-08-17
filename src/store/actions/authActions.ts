import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUsersFromDb,
  getUsersInfoFromDb,
  insertUserDb,
  updateUserFromDb,
} from '../../utils/db';

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (values, { rejectWithValue }) => {
    try {
      const response = await getUsersFromDb(values);
      return response?.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const createUser = createAsyncThunk(
  'auth/createUser',
  async (values, { rejectWithValue }) => {
    try {
      const response = await insertUserDb(values);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (values, { rejectWithValue }) => {
    try {
      const response = await updateUserFromDb(values);
      console.log('Güncelleme response:', response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const getUserInfo = createAsyncThunk(
  'auth/getUserInfo',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getUsersInfoFromDb(userId);
      console.log('Güncelleme response:', response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      return {};
    } catch (error) {
      return rejectWithValue('Kullanıcı bulunamadı', error.message);
    }
  },
);
