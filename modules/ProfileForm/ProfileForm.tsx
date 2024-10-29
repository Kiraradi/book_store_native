import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import PoppinsText from '../../UI/CustomsTexts/PoppinsText';
import {colors} from '../../assets/styles/colors';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import UserAvatar from './components/UserAvatar/UserAvatar';
import PersonalInformationCards from './components/PersonalInformationCards/PersonalInformationCards';

const ProfileForm: FC = () => {
  const [IsInformationEdit, setInformationEdit] = useState(false);
  const user = useAppSelector(state => state.user);
  console.log(user);
  const changeInformationEdit = () => {
    setInformationEdit(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <UserAvatar />
      <PoppinsText styles={styles.title}>{'Personal information'}</PoppinsText>
      <Pressable onPress={changeInformationEdit}>
        <PoppinsText styles={styles.text}>Change information</PoppinsText>
      </Pressable>
      {IsInformationEdit ? (
        <PoppinsText>Edit</PoppinsText>
      ) : (
        <PersonalInformationCards />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 15,
  },
  title: {
    fontSize: 18,
    color: colors.dark,
    fontWeight: 700,
  },
  text: {
    color: colors.darkGreen,
    fontWeight: 600,
    textDecorationLine: 'underline',
  },
});

export default ProfileForm;
