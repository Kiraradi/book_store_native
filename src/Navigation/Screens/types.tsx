import type {
  CompositeNavigationProp,
  NavigationProp,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};

export type ParamsListTab = {
  Catalog: undefined;
  Cart: undefined;
  Favorit: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Tab: ParamsListTab;
  Book: {id: number};
};

export type BookScreenProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Book'>,
  NavigationProp<ParamsListTab>
>;
