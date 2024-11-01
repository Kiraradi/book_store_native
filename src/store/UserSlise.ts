import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IStore, IUser} from '../interfaces';
import {
  editUserPasswordThunk,
  editUserThunk,
  logInUserThunk,
  signUpUserThunk,
} from './Thunks';

const initialState: IStore = {
  user: null,
  pending: true,
  hasError: false,
};

export const UserSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, payload: PayloadAction<IUser | null>) {
      const user = payload.payload;
      state.user = user;
    },
    logOut(state) {
      state.user = null;
    },
    changePending(state, payload: PayloadAction<boolean>) {
      state.pending = payload.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUserThunk.pending, state => {
        state.hasError = false;
      })
      .addCase(logInUserThunk.pending, state => {
        state.hasError = false;
      })
      .addCase(editUserThunk.pending, state => {
        state.hasError = false;
      })
      .addCase(editUserPasswordThunk.pending, state => {
        state.hasError = false;
      })
      .addCase(signUpUserThunk.fulfilled, (state, action) => {
        const user = action.payload;
        state.user = user;
        state.pending = false;
        state.hasError = false;
      })
      .addCase(logInUserThunk.fulfilled, (state, action) => {
        const user = action.payload;
        state.user = user;
        state.pending = false;
        state.hasError = false;
      })
      .addCase(editUserThunk.fulfilled, (state, action) => {
        const user = action.payload;
        state.user = user;
        state.pending = false;
        state.hasError = false;
      })
      .addCase(editUserPasswordThunk.fulfilled, state => {
        state.pending = false;
        state.hasError = false;
      })
      .addCase(signUpUserThunk.rejected, state => {
        state.pending = false;
        state.hasError = true;
      })
      .addCase(logInUserThunk.rejected, state => {
        state.pending = false;
        state.hasError = true;
      })
      .addCase(editUserThunk.rejected, state => {
        state.pending = false;
        state.hasError = true;
      })
      .addCase(editUserPasswordThunk.rejected, state => {
        state.pending = false;
        state.hasError = true;
      });
  },
});

export default UserSlise.reducer;
export const {logOut, addUser, changePending} = UserSlise.actions;
