import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import PoppinsText from '../CustomsTexts/PoppinsText';
import {colors} from '../../assets/styles/colors';

interface ICustomButton {
  text: string;
  callBack: () => void;
  styles?: object;
}

const CustomButton: FC<ICustomButton> = props => {
  return (
    <Pressable style={[styles.button, props.styles]} onPress={props.callBack}>
      <PoppinsText styles={styles.text}>{props.text}</PoppinsText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkBlue,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    height: 44,
  },
  text: {
    fontSize: 16,
    color: colors.light,
  },
});

export default CustomButton;
