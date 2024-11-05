import {createAsyncThunk} from '@reduxjs/toolkit';
import BookApi from '../../services/BookApi';

export const getAllBooksThunk = createAsyncThunk(
  'book/getAllBooks',
  async (_, thunkAPI) => {
    const response = await BookApi.getAllBooks().catch(() => null);
    if (!response) {
      return thunkAPI.rejectWithValue('error');
    }
    return response;
  },
);

export const getBookByIdThunk = createAsyncThunk(
  'book/getBookById',
  async (id: number, thunkAPI) => {
    const response = await BookApi.getBookById(id).catch(() => null);
    if (!response) {
      return thunkAPI.rejectWithValue('error');
    }
    return response;
  },
);
