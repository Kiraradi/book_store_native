import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../../assets/styles/colors';
import {FONT_FAMILY} from '../../../../config/customFont';

interface ICustomInput {
  value?: string;
  onChange?: (text: string) => void;
  img: ImageSourcePropType;
  placeholder: string;
  validationStatus?: 'success' | 'error' | null;
  isSecure: boolean;
  callbackForImg?: () => void;
}

const CustomInput: FC<ICustomInput> = props => {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.callbackForImg} style={styles.Pressable}>
        <Image source={props.img} />
      </Pressable>
      <TextInput
        style={[
          styles.input,
          props.validationStatus && styles[props.validationStatus],
        ]}
        secureTextEntry={props.isSecure}
        value={props.value}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  Pressable: {
    width: 35,
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: colors.light,
    paddingLeft: 64,
    borderRadius: 10,
    backgroundColor: colors.light,
    fontFamily: FONT_FAMILY.Poppins_Regular,
    fontSize: 18,
  },
  success: {
    borderColor: colors.green,
  },
  error: {
    borderColor: colors.red,
  },
});

export default CustomInput;
