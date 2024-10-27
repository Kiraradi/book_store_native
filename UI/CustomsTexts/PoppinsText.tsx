import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONT_FAMILY} from '../../config/customFont';

interface IPoppinsText {
  children: string;
  styles?: object;
}

const PoppinsText: FC<IPoppinsText> = props => {
  return <Text style={[styles.text, props.styles]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.Poppins_Regular,
  },
});

export default PoppinsText;
