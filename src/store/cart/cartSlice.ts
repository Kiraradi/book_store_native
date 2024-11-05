import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IBook, ICartStore} from '../../interfaces';

const initialState: ICartStore = {
  books: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addBookToCart: (state, action: PayloadAction<IBook>) => {
      const book = action.payload;
      state.books.push(book);
    },
  },
  extraReducers: builder => {},
});

export const {addBookToCart} = CartSlice.actions;
export default CartSlice.reducer;
