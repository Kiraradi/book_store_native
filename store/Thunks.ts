import {createAsyncThunk} from '@reduxjs/toolkit';
import {IAuthData} from '../interfaces';
import UserApi from '../services/UserApi';

export const signUpUserThunk = createAsyncThunk(
  'user/signUpUser',
  async (data: IAuthData, thunkAPI) => {
    const response = await UserApi.signUpUser(data);
    if (!response.payload) {
      return thunkAPI.rejectWithValue(response.message);
    }

    return response.payload.user;
  },
);

export const logInUserThunk = createAsyncThunk(
  'user/logInUser',
  async (data: IAuthData, thunkAPI) => {
    const response = await UserApi.logInUser(data);
    if (!response.payload) {
      return thunkAPI.rejectWithValue(response.message);
    }

    return response.payload.user;
  },
);
