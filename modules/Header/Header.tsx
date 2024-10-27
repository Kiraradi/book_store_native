import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    width: '100%',
  },
  img: {},
});
export default Header;
