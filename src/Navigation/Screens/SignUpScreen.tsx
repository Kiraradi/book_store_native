import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../modules/Header/Header';
import SingUpForm from '../../modules/SingUpForm/SignUpForm';
import {AuthStackParamList} from './types';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUpScreen: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SingUpForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SignUpScreen;
