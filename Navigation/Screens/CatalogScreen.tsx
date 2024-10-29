import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import TokenService from '../../services/TokenService';
import {logOut} from '../../store/UserSlise';

type RootStackParamList = {
  Catalog: undefined;
  Book: {id: string};
};
type Props = NativeStackScreenProps<RootStackParamList, 'Catalog'>;

const CatalogScreen: FC<Props> = props => {
  const dispatch = useAppDispatch();
  const handleLogOut = async () => {
    await TokenService.clearTokens();
    dispatch(logOut());
  };
  return (
    <View>
      <Text>CatalogScreen</Text>
      <Button
        title="Go to Book"
        onPress={() => {
          props.navigation.navigate('Book', {id: '15'});
        }}
      />
      <Button
        title="LOG OUT"
        onPress={() => {
          handleLogOut();
        }}
      />
    </View>
  );
};

export default CatalogScreen;
