import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {colors} from '../../assets/styles/colors';
import PoppinsText from '../CustomsTexts/PoppinsText';

interface ICustomTabButton {
  img?: ImageSourcePropType;
  styles?: object;
  isSelected?: boolean;
  bagde?: number | string | undefined;
}

const CustomTabButton: FC<ICustomTabButton> = props => {
  return (
    <View
      style={[
        styles.button,
        props.styles,
        props.isSelected && styles.selected,
      ]}>
      <Image style={styles.img} source={props.img} />
      {props.bagde && (
        <View style={styles.badge}>
          <PoppinsText styles={styles.badgeText}>{props.bagde}</PoppinsText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 38,
    height: 38,
    borderRadius: 20,
    marginBottom: 6,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    borderWidth: 3,
    borderColor: colors.darkBlue,
    position: 'relative',
  },
  img: {
    width: 16,
    height: 16,
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderColor: colors.darkGrey,
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  badge: {
    position: 'absolute',
    top: -11,
    right: -11,
    backgroundColor: colors.green,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.dark,
  },
  badgeText: {
    fontSize: 12,
  },
});

export default CustomTabButton;
