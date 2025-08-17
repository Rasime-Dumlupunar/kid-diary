import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteNoteFromDb, getNotesFromDb } from '../../utils/db';

export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes',
  async (values, { rejectWithValue }) => {
    try {
      const response = await getNotesFromDb(values);

      return response;
    } catch (error) {
      console.error('Error', error);
      return rejectWithValue('Kullanıcı bulunamadı', error.message);
    }
  },
);
export const deleteDiary = createAsyncThunk(
  'notes/deleteDiary',
  async (notId, { rejectWithValue }) => {
    try {
      const response = await deleteNoteFromDb(notId);
      return response;
      console.log('delete :', response);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
