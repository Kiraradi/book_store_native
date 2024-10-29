import {createAsyncThunk} from '@reduxjs/toolkit';
import {IAuthData} from '../interfaces';
import UserApi from '../services/UserApi';
import TokenService from '../services/TokenService';

export const signUpUserThunk = createAsyncThunk(
  'user/signUpUser',
  async (data: IAuthData, thunkAPI) => {
    const response = await UserApi.signUpUser(data);
    if (!response.payload) {
      return thunkAPI.rejectWithValue(response.message);
    }
    await TokenService.saveAccessToken(response.payload.tokens.accessToken);
    await TokenService.saveRefreshToken(response.payload.tokens.refreshToken);

    return response.payload.user;
  },
);

export const logInUserThunk = createAsyncThunk(
  'user/logInUser',
  async (data: IAuthData, thunkAPI) => {
    const response = await UserApi.logInUser(data);
    console.log('log', response);
    if (!response.payload) {
      return thunkAPI.rejectWithValue(response.message);
    }
    await TokenService.saveAccessToken(response.payload.tokens.accessToken);
    await TokenService.saveRefreshToken(response.payload.tokens.refreshToken);

    return response.payload.user;
  },
);
