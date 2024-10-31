import {createAsyncThunk} from '@reduxjs/toolkit';
import {IAuthData, IEditUserData, IEditUserPasswordData} from '../interfaces';
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
    if (!response.payload) {
      return thunkAPI.rejectWithValue(response.message);
    }
    await TokenService.saveAccessToken(response.payload.tokens.accessToken);
    await TokenService.saveRefreshToken(response.payload.tokens.refreshToken);

    return response.payload.user;
  },
);

export const editUserThunk = createAsyncThunk(
  'user/editUser',
  async (data: IEditUserData, thunkAPI) => {
    const response = await UserApi.EditUserInfo(data);
    if (!response.payload) {
      return thunkAPI.rejectWithValue(response.message);
    }
    return response.payload.user;
  },
);

export const editUserPasswordThunk = createAsyncThunk(
  'user/editPasswordUser',
  async (data: IEditUserPasswordData, thunkAPI) => {
    const response = await UserApi.EditUserPassword(data);
    if (!response) {
      return thunkAPI.rejectWithValue('error');
    }
    return response.payload;
  },
);
