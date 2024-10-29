import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileForm from '../../modules/ProfileForm/ProfileForm';

const ProfileScreen: FC = () => {
  return (
    <View style={styles.container}>
      <ProfileForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default ProfileScreen;
