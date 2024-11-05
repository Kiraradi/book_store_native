import {createSlice} from '@reduxjs/toolkit';
import {IBookStore} from '../../interfaces';
import {getAllBooksThunk, getBookByIdThunk} from './thunks';

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

    builder.addCase(getBookByIdThunk.pending, state => {
      state.pending = true;
      state.hasError = false;
    });

    builder.addCase(getAllBooksThunk.fulfilled, (state, action) => {
      const books = action.payload;
      state.books = books;
      state.pending = false;
      state.hasError = false;
    });

    builder.addCase(getBookByIdThunk.fulfilled, (state, action) => {
      const book = action.payload;
      if (book) {
        const index = state.books.findIndex(item => item.id === book.id);
        if (index !== -1) {
          state.books[index] = book;
        }
      }
      state.pending = false;
      state.hasError = false;
    });

    builder.addCase(getAllBooksThunk.rejected, state => {
      state.pending = false;
      state.hasError = true;
    });

    builder.addCase(getBookByIdThunk.rejected, state => {
      state.pending = false;
      state.hasError = true;
    });
  },
});

export default BookSlice.reducer;

export const {} = BookSlice.actions;
