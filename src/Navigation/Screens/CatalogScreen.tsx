import React, {FC, useEffect} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import {useDispatch} from 'react-redux';
import {getAllBooksThunk} from '../../store/book/thunks';
import {AppDispatch} from '../../store';
import BookLabel from '../../modules/BookLabel/BookLabel';
import {ParamsListTab} from './types';
import {colors} from '../../assets/styles/colors';

type Props = NativeStackScreenProps<ParamsListTab, 'Catalog'>;

const CatalogScreen: FC<Props> = () => {
  const books = useAppSelector(store => store.book.books);
  const dispatch = useDispatch<AppDispatch>();
  const [isRefreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(getAllBooksThunk()).finally(() => {
        setRefreshing(false);
      });
    }, 1000);
  };

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
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={[colors.darkBlue]}
            tintColor={colors.darkBlue}
          />
        }
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
    backgroundColor: 'white',
  },
});

export default CatalogScreen;
