import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {colors} from '../../assets/styles/colors';

interface ICustomTabButton {
  img?: ImageSourcePropType;
}

const CustomTabButton: FC<ICustomTabButton> = props => {
  return (
    <View style={styles.button}>
      <Image style={styles.img} source={props.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginBottom: 6,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  img: {
    width: 17,
    height: 17,
    zIndex: -1,
  },
});

export default CustomTabButton;
