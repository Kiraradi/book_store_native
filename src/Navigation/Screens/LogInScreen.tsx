import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import LogInForm from '../../modules/LogInForm/LogInForm';
import Header from '../../modules/Header/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type RootStackParamList = {
  LogIn: undefined;
  SingUp: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const LogInScreen: FC<Props> = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        styles.container,
      ]}>
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
