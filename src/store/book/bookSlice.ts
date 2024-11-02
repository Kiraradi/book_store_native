import {createSlice} from '@reduxjs/toolkit';
import {IBookStore} from '../../interfaces';

const initialState: IBookStore = {
  books: [],
  pending: true,
  hasError: false,
};

export const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default BookSlice.reducer;

export const {} = BookSlice.actions;
