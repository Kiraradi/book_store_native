import {configureStore} from '@reduxjs/toolkit';
import UserReduser from './UserSlise';

export const makeStore = configureStore({
  reducer: {
    user: UserReduser,
  },
});

export type AppDispatch = typeof makeStore.dispatch;
export type AppState = ReturnType<typeof makeStore.getState>;
