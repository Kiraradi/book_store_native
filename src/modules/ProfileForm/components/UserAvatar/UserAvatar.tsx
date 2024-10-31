import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {useAppSelector} from '../../../../store/hooks/useAppSelector';
import {launchImageLibrary, MediaType} from 'react-native-image-picker';
import UserApi from '../../../../services/UserApi';
import {useAppDispatch} from '../../../../store/hooks/useAppDispatch';
import {addUser} from '../../../../store/UserSlise';
import {SERVER_URL} from '../../../../../config';
import CustomTabButton from '../../../../UI/Components/CustomTabButton';

const UserAvatar: FC = () => {
  const user = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  const getLogo = (): ImageSourcePropType => {
    if (user?.avatar) {
      return {
        uri: `${SERVER_URL}${user?.avatar}`,
      };
    }
    return require('../../../../assets/images/UserAvatar.png');
  };

  const getFoto = async () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: true,
      maxHeight: 1000,
      maxWidth: 1000,
    };
    const photo = await launchImageLibrary(options);
    if (photo.assets && photo.assets[0].base64 && photo.assets[0].fileName) {
      const fileName = photo.assets[0].fileName;
      const extension = fileName.substring(fileName.indexOf('.') + 1);
      const data = {
        baseImg: photo.assets[0]['base64'],
        extension: extension,
      };

      const userWithAvatar = await UserApi.saveAtatar(data).catch(() => null);

      if (userWithAvatar) {
        dispatch(addUser(userWithAvatar));
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.conteiner}>
        <Image style={styles.img} source={getLogo()} />
        <Pressable style={styles.buttonWrapper} onPress={getFoto}>
          <CustomTabButton
            img={require('../../../../assets/icons/Camera.png')}
            styles={styles.button}
          />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  conteiner: {
    position: 'relative',
  },
  img: {
    height: 300,
    width: 300,
    borderRadius: 16,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
export default UserAvatar;
