import React, {FC, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import {useDispatch} from 'react-redux';
import {getAllBooksThunk} from '../../store/book/thunks';
import {AppDispatch} from '../../store';
import BookLabel from '../../modules/BookLabel/BookLabel';

type RootStackParamList = {
  Catalog: undefined;
  Book: {id: number};
};
type Props = NativeStackScreenProps<RootStackParamList, 'Catalog'>;

const CatalogScreen: FC<Props> = () => {
  const books = useAppSelector(store => store.book.books);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getBooks = async () => {
      dispatch(getAllBooksThunk());
    };
    getBooks();
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        style={styles.wrapper}
        renderItem={({item}) => {
          return <BookLabel {...item} />;
        }}
        keyExtractor={item => item.id.toString()}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
  },
  wrapper: {
    width: '100%',
    flexDirection: 'column',
  },
});

export default CatalogScreen;
