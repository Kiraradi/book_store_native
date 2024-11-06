import {
  IAuthData,
  IEditUserData,
  IEditUserPasswordData,
  IResponse,
  ISaveAtatarData,
  ITokens,
  IUser,
} from '../interfaces';
import configuredAxios from '../Api';
import {IPayloadSignUpUser} from './interfaces';
import {ServerBreakpoints} from '../../enams';
import axios from 'axios';
import TokenService from './TokenService';
import {SERVER_URL} from '../../config';

const signUpUser = async (data: IAuthData) => {
  const response = await configuredAxios.post<IResponse<IPayloadSignUpUser>>(
    ServerBreakpoints.signUp,
    data,
  );

  return response.data;
};

const logInUser = async (data: IAuthData) => {
  const response = await configuredAxios.post<IResponse<IPayloadSignUpUser>>(
    ServerBreakpoints.logIn,
    data,
  );
  return response.data;
};

const getMe = async () => {
  const response = await configuredAxios.get<IResponse<IPayloadSignUpUser>>(
    `${SERVER_URL}${ServerBreakpoints.getMe}`,
  );

  return response.data.payload.user;
};

const saveAtatar = async (data: ISaveAtatarData) => {
  const response = await configuredAxios.post<IResponse<{user: IUser}>>(
    ServerBreakpoints.saveAvatar,
    data,
  );
  if (!response.data.payload) {
    return null;
  }

  return response.data.payload.user;
};

const EditUserInfo = async (data: IEditUserData) => {
  const response = await configuredAxios.put<IResponse<{user: IUser}>>(
    ServerBreakpoints.userEdit,
    data,
  );

  return response.data;
};

const EditUserPassword = async (data: IEditUserPasswordData) => {
  const response = await configuredAxios.put<IResponse<null>>(
    ServerBreakpoints.userEditPassword,
    data,
  );

  return response?.data;
};

export const refreshToken = async () => {
  const token = await TokenService.getRefreshToken();
  const data = {
    refreshToken: token,
  };

  const response = await axios.post<IResponse<ITokens>>(
    `${SERVER_URL}${ServerBreakpoints.refresh}`,
    data,
  );

  await TokenService.saveAccessToken(response.data.payload.accessToken);
  await TokenService.saveRefreshToken(response.data.payload.refreshToken);
};

export default {
  signUpUser,
  logInUser,
  getMe,
  EditUserInfo,
  EditUserPassword,
  saveAtatar,
};
