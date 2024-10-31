import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../assets/styles/colors';

const Spinner: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.darkBlue} size={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Spinner;
