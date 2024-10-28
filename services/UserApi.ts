import {IAuthData, IResponse} from '../interfaces';
import configuredAxios from '../Api';
import {IPayloadSignUpUser} from './interfaces';
import {ServerBreakpoints} from '../enams';
import {AxiosError} from 'axios';
const signUpUser = async (data: IAuthData) => {
  const response = await configuredAxios
    .post<IResponse<IPayloadSignUpUser>>(ServerBreakpoints.signUp, data)
    .catch((error: AxiosError<IResponse<null>>) => {
      return error.response;
    });

  if (!response?.data.payload) {
    return {
      message: 'error',
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
      message: 'error',
      payload: null,
    };
  }
  return response.data;
};

export default {
  signUpUser,
  logInUser,
};
