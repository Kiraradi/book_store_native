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
import {ServerBreakpoints} from '../enams';
import {AxiosError} from 'axios';
import TokenService from './TokenService';

const signUpUser = async (data: IAuthData) => {
  const response = await configuredAxios
    .post<IResponse<IPayloadSignUpUser>>(ServerBreakpoints.signUp, data)
    .catch((error: AxiosError<IResponse<null>>) => {
      return error.response;
    });

  if (!response?.data.payload) {
    return {
      message: response?.data.message,
      payload: null,
    };
  }
  return response.data;
};

const logInUser = async (data: IAuthData) => {
  const response = await configuredAxios
    .post<IResponse<IPayloadSignUpUser>>(ServerBreakpoints.logIn, data)
    .catch((error: AxiosError<IResponse<null>>) => {
      return error.response;
    });
  if (!response?.data.payload) {
    return {
      message: response?.data.message,
      payload: null,
    };
  }
  return response.data;
};

const getMe = async () => {
  const response = await configuredAxios
    .get<IResponse<IPayloadSignUpUser>>(ServerBreakpoints.getMe)
    .catch((error: AxiosError<IResponse<null>>) => {
      return error.response;
    });
  if (!response?.data?.payload) {
    return null;
  }

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
  if (!response?.data.payload) {
    return {
      message: response?.data.message,
      payload: null,
    };
  }

  return response.data;
};

const EditUserPassword = async (data: IEditUserPasswordData) => {
  const response = await configuredAxios
    .put<IResponse<null>>(ServerBreakpoints.userEditPassword, data)
    .catch((error: AxiosError<IResponse<null>>) => {
      return error.response;
    });

  return response?.data;
};

export const refreshToken = async () => {
  const token = await TokenService.getRefreshToken();
  const data = {
    refreshToken: token,
  };
  const response = await configuredAxios
    .post<IResponse<ITokens>>(ServerBreakpoints.refresh, data)
    .catch((error: AxiosError<IResponse<null>>) => {
      return error.response;
    });
  if (!response?.data.payload) {
    return '';
  }
  await TokenService.saveAccessToken(response.data.payload.accessToken);
  await TokenService.saveRefreshToken(response.data.payload.refreshToken);
  return response.data.payload.accessToken;
};

export default {
  signUpUser,
  logInUser,
  getMe,
  EditUserInfo,
  EditUserPassword,
  saveAtatar,
};
