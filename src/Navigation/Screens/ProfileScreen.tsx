import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ProfileForm from '../../modules/ProfileForm/ProfileForm';

const ProfileScreen: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default ProfileScreen;
