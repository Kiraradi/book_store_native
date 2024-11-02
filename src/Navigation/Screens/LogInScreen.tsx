import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import LogInForm from '../../modules/LogInForm/LogInForm';
import Header from '../../modules/Header/Header';

type RootStackParamList = {
  LogIn: undefined;
  SingUp: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const LogInScreen: FC<Props> = () => {
  return (
    <View style={[styles.container]}>
      <Header />
      <LogInForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default LogInScreen;
