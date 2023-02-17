import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, logOut } from './api';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const loading = state => { state.isLoading = true; };

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reduser: {},
  extraReducers: {
    [fetchContacts.pending]: loading,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: rejected,
    [addContact.pending]: loading,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: rejected,
    [deleteContact.pending]: loading,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: rejected,
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;