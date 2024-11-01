import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Book: {id: string};
  Catalog: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Book'>;

const BookScreen: FC<Props> = props => {
  return (
    <View>
      <Text>{`ID==>${props.route.params.id}`}</Text>
      <Button
        title="Catalog"
        onPress={() => {
          props.navigation.navigate('Catalog');
        }}
      />
    </View>
  );
};

export default BookScreen;
