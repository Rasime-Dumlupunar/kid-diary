import { createSlice } from '@reduxjs/toolkit';
import { deleteDiary, fetchNotes } from '../actions/noteActions';

const initialState = {
  notes: [],
  pending: false,
  info: null,
  visible: false,
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    closeModal: (state, action) => {
      state.visible = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotes.pending, state => {
        state.pending = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.notes = action.payload;
        state.pending = false;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(deleteDiary.fulfilled, (state, action) => {
        state.info = action.payload;
        state.visible = true;
      })
      .addCase(deleteDiary.rejected, (state, action) => {
        state.pending = false;
        state.info = action.payload;
        state.visible = true;
      });
  },
});
export const { closeModal } = noteSlice.actions;
export default noteSlice.reducer;
