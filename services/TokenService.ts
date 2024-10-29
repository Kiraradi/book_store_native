import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

const saveAccessToken = async (token: string) => {
  const message = await RNSecureStorage.setItem('accessToken', token, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED,
  });
  console.log(`AccessToken => ${message}`);
};

const saveRefreshToken = async (token: string) => {
  const message = await RNSecureStorage.setItem('refreshToken', token, {
    accessible: ACCESSIBLE.WHEN_UNLOCKED,
  });
  console.log(`RefreshToken => ${message}`);
};

const getAccessToken = async () => {
  const data = await RNSecureStorage.getItem('accessToken').catch(() => {
    return '';
  });
  return data;
};

const getRefreshToken = async () => {
  const data = await RNSecureStorage.getItem('refreshToken').catch(() => {
    return '';
  });

  return data;
};

const clearTokens = async () => {
  await RNSecureStorage.clear();
};

export default {
  saveAccessToken,
  saveRefreshToken,
  getRefreshToken,
  getAccessToken,
  clearTokens,
};
