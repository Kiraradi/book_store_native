export interface IUser {
  id: number;
  fullName: string | null;
  email: string;
  avatar: string | null;
}

export interface IEditUserData {
  fullName?: string;
  email?: string;
}

export interface IEditUserPassword {
  oldPassword: string;
  newPassword: string;
  passwordReplay: string;
}

export interface IEditUserPasswordData {
  password: string;
  newPassword: string;
}

export interface IStore {
  user: IUser | null;
  pending: boolean;
  hasError: boolean;
}

export interface IAuthData {
  email: string;
  password: string;
}

export interface ISignUpData {
  email: string;
  password: string;
  passwordReplay: string;
}

export interface IResponse<T> {
  message: string;
  payload: T;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface ISaveAtatarData {
  baseImg: string;
  extension: string;
}
