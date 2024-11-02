import React, {FC} from 'react';
import {IBook} from '../../interfaces';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {SERVER_URL} from '../../../config';
import PoppinsText from '../../UI/CustomsTexts/PoppinsText';

const BookLabel: FC<IBook> = props => {
  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.coverButton}>
        <Image
          style={styles.img}
          source={{uri: `${SERVER_URL}${props.cover}`}}
        />
      </Pressable>
      <PoppinsText styles={styles.name}>{props.name}</PoppinsText>
      <PoppinsText styles={styles.author}>{props.author}</PoppinsText>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '50%',
    paddingVertical: 5,
    height: 300,
    flexDirection: 'column',
    padding: 10,
  },
  coverButton: {
    flex: 1,
  },
  img: {width: '100%', height: '100%', borderRadius: 16},
  name: {
    fontSize: 18,
  },
  author: {
    fontSize: 18,
  },
});

export default BookLabel;
