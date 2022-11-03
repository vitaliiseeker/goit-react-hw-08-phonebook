import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [updateContact.pending]: state => {
      state.isLoading = true;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  }
});

export default contactsSlice.reducer;