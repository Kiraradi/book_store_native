import React, {FC} from 'react';
import {IBook} from '../../interfaces';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {SERVER_URL} from '../../../config';
import PoppinsText from '../../UI/CustomsTexts/PoppinsText';
import CustomButton from '../../UI/CustomButton/CustomButton';
import {colors} from '../../assets/styles/colors';
import {useNavigation} from '@react-navigation/native';
import {BookScreenProps} from '../../Navigation/Screens/types';

const BookLabel: FC<IBook> = props => {
  const navigator = useNavigation<BookScreenProps>();
  const goToBook = () => {
    navigator.navigate('Book', {id: props.id});
  };
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={goToBook} style={styles.coverButton}>
        <Image
          style={styles.img}
          source={{uri: `${SERVER_URL}${props.cover}`}}
        />
      </Pressable>
      <View style={styles.container}>
        <PoppinsText numberOfLines={1} styles={styles.name}>
          {props.name}
        </PoppinsText>
        <PoppinsText numberOfLines={1} styles={styles.author}>
          {props.author}
        </PoppinsText>
      </View>
      <CustomButton text={`$ ${props.price} USD`} callBack={() => null} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '50%',
    paddingVertical: 5,
    height: 400,
    flexDirection: 'column',
    padding: 10,
  },
  coverButton: {
    flex: 1,
  },
  img: {width: '100%', height: '100%', borderRadius: 16, maxHeight: 350},
  container: {
    paddingVertical: 10,
    alignItems: 'flex-start',
    gap: 5,
  },
  name: {
    fontSize: 18,
    color: colors.darkBlue,
  },
  author: {
    fontSize: 18,
    color: colors.darkGrey,
  },
});

export default BookLabel;
