import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filterReduser from './contacts/filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReduser,
  },
});