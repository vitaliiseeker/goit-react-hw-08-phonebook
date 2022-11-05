import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://635bc8648aa87edd9151102a.mockapi.io/api/v1/users'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `https://635bc8648aa87edd9151102a.mockapi.io/api/v1/users/${user.id}`,
        user
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
