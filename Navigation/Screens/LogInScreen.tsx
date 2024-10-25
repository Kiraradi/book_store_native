import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/styles/colors';

type RootStackParamList = {
  LogIn: undefined;
  SingUp: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

const LogInScreen: FC<Props> = props => {
  return (
    <View>
      <Text style={styles.text}>LogInScreen</Text>
      <View style={styles.wrapper}>
        <Button
          title="Or Sing Up"
          onPress={() => props.navigation.navigate('SingUp')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
    padding: 30,
  },
  text: {
    color: colors.darkBlue,
    fontSize: 25,
  },

  textButton: {
    color: 'white',
    textTransform: 'uppercase',
  },

  customButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 3,
    padding: 5,
    alignItems: 'center',
  },
});

export default LogInScreen;
