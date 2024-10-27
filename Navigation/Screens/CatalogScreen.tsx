import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Catalog: undefined;
  Book: {id: string};
};
type Props = NativeStackScreenProps<RootStackParamList, 'Catalog'>;

const CatalogScreen: FC<Props> = props => {
  return (
    <View>
      <Text>CatalogScreen</Text>
      <Button
        title="Go to Book"
        onPress={() => {
          props.navigation.navigate('Book', {id: '15'});
        }}
      />
    </View>
  );
};

export default CatalogScreen;
