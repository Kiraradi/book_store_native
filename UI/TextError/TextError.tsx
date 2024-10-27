import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import PoppinsText from '../CustomsTexts/PoppinsText';
import {colors} from '../../assets/styles/colors';

interface ITextError {
  fieldName: string;
  text: string;
  isBeingFilledIn: boolean;
  validationStatus?: 'success' | 'error' | null;
}

const TextError: FC<ITextError> = props => {
  const getText = () => {
    if (!props.isBeingFilledIn) {
      return props.text;
    }
    if (props.validationStatus && props.validationStatus === 'success') {
      return `${props.fieldName} available!`;
    }
    return `${props.fieldName} is not correct!`;
  };
  const text = getText();
  return (
    <View style={styles.container}>
      <PoppinsText
        styles={[
          styles.text,
          props.validationStatus && styles[props.validationStatus],
        ]}>
        {text}
      </PoppinsText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  text: {
    color: colors.darkBlue,
    fontSize: 15,
  },
  success: {
    color: colors.green,
  },
  error: {
    color: colors.red,
  },
});

export default TextError;
