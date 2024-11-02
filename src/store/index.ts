import {configureStore} from '@reduxjs/toolkit';
import UserReduser from './user/UserSliсe';
import BookReduser from './book/bookSlice';

export const makeStore = configureStore({
  reducer: {
    user: UserReduser,
    book: BookReduser,
  },
});

export type AppDispatch = typeof makeStore.dispatch;
export type AppState = ReturnType<typeof makeStore.getState>;
