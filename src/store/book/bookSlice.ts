import {createSlice} from '@reduxjs/toolkit';
import {IBookStore} from '../../interfaces';
import {getAllBooksThunk} from './thunks';

const initialState: IBookStore = {
  books: [],
  pending: false,
  hasError: false,
};

export const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllBooksThunk.pending, state => {
      state.pending = true;
      state.hasError = false;
    });
    builder.addCase(getAllBooksThunk.fulfilled, (state, action) => {
      const books = action.payload;
      state.books = books;
      state.pending = false;
      state.hasError = false;
    });
    builder.addCase(getAllBooksThunk.rejected, state => {
      state.pending = false;
      state.hasError = true;
    });
  },
});

export default BookSlice.reducer;

export const {} = BookSlice.actions;
