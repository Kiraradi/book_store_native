import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {FONT_FAMILY} from '../../../config/customFont';

interface IPoppinsText {
  children: string | number;
  styles?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

const PoppinsText: FC<IPoppinsText> = props => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      style={[styles.text, props.styles]}>
      {props.children.toString()}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.Poppins_Regular,
  },
});

export default PoppinsText;
