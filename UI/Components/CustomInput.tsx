import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../assets/styles/colors';

interface ICustomInput {
  value: string;
  onChange: (text: string) => void;
  img: ImageSourcePropType;
}

const CustomInput: FC<ICustomInput> = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={props.img} />
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 20,
    zIndex: 2,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.darkGrey,
    paddingLeft: 50,
    borderRadius: 10,
    backgroundColor: colors.light,
  },
});

export default CustomInput;
