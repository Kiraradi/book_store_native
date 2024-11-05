import {configureStore} from '@reduxjs/toolkit';
import UserReduser from './user/UserSliсe';
import BookReduser from './book/bookSlice';
import CartReduser from './cart/cartSlice';

export const makeStore = configureStore({
  reducer: {
    user: UserReduser,
    book: BookReduser,
    cart: CartReduser,
  },
});

export type AppDispatch = typeof makeStore.dispatch;
export type AppState = ReturnType<typeof makeStore.getState>;
