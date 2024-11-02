import {createAsyncThunk} from '@reduxjs/toolkit';
import BookApi from '../../services/BookApi';

export const getAllBooksThunk = createAsyncThunk(
  'book/editUser',
  async (_, thunkAPI) => {
    const response = await BookApi.getAllBooks().catch(() => null);
    if (!response) {
      return thunkAPI.rejectWithValue('error');
    }
    return response;
  },
);
