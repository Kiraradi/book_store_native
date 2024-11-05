export type AuthStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};

export type RootStackParamList = {
  Catalog: undefined;
  Book: {id: number};
  Cart: undefined;
  Profile: undefined;
  Favorite: undefined;
};
