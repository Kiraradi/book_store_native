import React, {FC} from 'react';
import {Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

type Props = NativeStackScreenProps<RootStackParamList, 'Book'>;

const BookScreen: FC<Props> = props => {
  return (
    <View>
      <Text>{`ID==>${props.route.params.id}`}</Text>
    </View>
  );
};

export default BookScreen;
