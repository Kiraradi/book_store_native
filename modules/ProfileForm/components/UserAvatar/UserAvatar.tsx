import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../../../store/hooks/useAppSelector';

const UserAvatar: FC = () => {
  const user = useAppSelector(state => state.user);

  const getLogo = (): ImageSourcePropType => {
    if (false) {
      //ToDo
      console.log(user);
      return {
        uri: '',
      };
    }
    return require('../../../../assets/images/UserAvatar.png');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={getLogo()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  img: {
    height: 300,
    width: 300,
  },
});
export default UserAvatar;
