import {createSlice} from '@reduxjs/toolkit';
import {IStore} from '../interfaces';
import {logInUserThunk, signUpUserThunk} from './Thunks';

const initialState: IStore = {
  user: null,
  pending: false,
  hasError: false,
};

export const UserSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUserThunk.pending, state => {
        state.pending = true;
        state.hasError = false;
      })
      .addCase(logInUserThunk.pending, state => {
        state.pending = true;
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
      .addCase(signUpUserThunk.rejected, state => {
        state.pending = false;
        state.hasError = true;
      })
      .addCase(logInUserThunk.rejected, state => {
        state.pending = false;
        state.hasError = true;
      });
  },
});

export default UserSlise.reducer;
export const {logOut} = UserSlise.actions;
