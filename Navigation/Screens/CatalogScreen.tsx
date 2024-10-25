import React, {FC, useState} from 'react';
import {Button, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomInput from '../../UI/Components/CustomInput';

type RootStackParamList = {
  Catalog: undefined;
  Book: {id: string};
};
type Props = NativeStackScreenProps<RootStackParamList, 'Catalog'>;

const CatalogScreen: FC<Props> = props => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>CatalogScreen</Text>
      <Button
        title="Go to Book"
        onPress={() => {
          props.navigation.navigate('Book', {id: '15'});
        }}
      />
      <CustomInput
        value={text}
        onChange={setText}
        img={require('../../assets/icons/Search.png')}
      />
    </View>
  );
};

export default CatalogScreen;
