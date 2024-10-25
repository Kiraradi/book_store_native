import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/styles/colors';

type RootStackParamList = {
  SingUp: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'SingUp'>;

const SingUpScreen: FC<Props> = props => {
  return (
    <View>
      <Text style={styles.text}>SingUpScreen</Text>
      <View style={styles.wrapper}>
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
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

export default SingUpScreen;
