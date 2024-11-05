import React, {FC} from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {SERVER_URL} from '../../../config';
import PoppinsText from '../../UI/CustomsTexts/PoppinsText';
import {colors} from '../../assets/styles/colors';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import {getBookByIdThunk} from '../../store/book/thunks';

type Props = NativeStackScreenProps<RootStackParamList, 'Book'>;

const BookScreen: FC<Props> = props => {
  const books = useAppSelector(store => store.book.books);
  const pending = useAppSelector(store => store.book.pending);
  const dispatch = useAppDispatch();
  const book = books.find(item => item.id === props.route.params.id);

  if (!book) {
    return <PoppinsText>Book not found</PoppinsText>;
  }

  const onRefresh = async () => {
    dispatch(getBookByIdThunk(book.id));
  };

  return (
    <ScrollView
      style={styled.scrollContainer}
      refreshControl={
        <RefreshControl
          refreshing={pending}
          onRefresh={onRefresh}
          colors={[colors.darkBlue]}
          tintColor={colors.darkBlue}
        />
      }>
      <View style={styled.content}>
        <View style={styled.infoWrapper}>
          <View style={styled.imgWrapper}>
            <Image
              style={styled.img}
              source={{uri: `${SERVER_URL}${book.cover}`}}
              alt="img"
            />
          </View>

          <View style={styled.info}>
            <PoppinsText styles={styled.name}>{book.name}</PoppinsText>
            <PoppinsText styles={styled.author}>{book.author}</PoppinsText>
          </View>
        </View>
        <View style={styled.descriptionWrapper}>
          <PoppinsText styles={styled.descriptonTitle}>Description</PoppinsText>
          <PoppinsText styles={styled.descriptionText}>
            {book.description}
          </PoppinsText>
        </View>
      </View>
    </ScrollView>
  );
};

const styled = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  content: {
    gap: 20,
  },
  infoWrapper: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    height: 250,
  },
  imgWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  img: {
    padding: 10,
    width: '100%',
    maxWidth: 165,
    height: '100%',
    maxHeight: 250,
    borderRadius: 16,
  },
  info: {
    alignItems: 'flex-start',
    gap: 15,
    flex: 1,
  },
  name: {
    fontSize: 20,
    color: colors.dark,
    fontWeight: 700,
    textAlign: 'left',
  },
  author: {
    fontSize: 18,
    color: colors.dark,
    textAlign: 'left',
  },
  descriptionWrapper: {
    alignItems: 'flex-start',
    gap: 10,
  },
  descriptonTitle: {
    fontSize: 18,
    color: colors.dark,
  },
  descriptionText: {
    fontSize: 16,
    color: colors.darkBlue,
    textAlign: 'left',
  },
});

export default BookScreen;
