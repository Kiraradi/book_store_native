import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import PoppinsText from '../../UI/CustomsTexts/PoppinsText';
import {colors} from '../../assets/styles/colors';
import UserAvatar from './components/UserAvatar/UserAvatar';
import PersonalInformationCards from './components/PersonalInformationCards/PersonalInformationCards';
import PersonalInfoEditForm from './components/PersonalInfoEditForm/PersonalInfoEditForm';
import PasswordEdit from './components/PasswordEdit/PasswordEdit';
import TokenService from '../../services/TokenService';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { logOut } from '../../store/user/UserSliсe';

const ProfileForm: FC = () => {
  const [isInformationEdit, setInformationEdit] = useState(false);
  const [isPasswordEdit, setPasswordEdit] = useState(false);
  const dispatch = useAppDispatch();
  const changeInformationEdit = () => {
    setInformationEdit(prev => !prev);
  };
  const changePasswordEdit = () => {
    setPasswordEdit(prev => !prev);
  };

  const closePersonalInfoEditForm = () => {
    setInformationEdit(false);
  };
  const closePasswordEditForm = () => {
    setPasswordEdit(false);
  };

  const handleLogOut = async () => {
    await TokenService.clearTokens();
    dispatch(logOut());
  };

  return (
    <View style={styles.wrapper}>
      <UserAvatar />
      <PoppinsText styles={styles.title}>{'Personal information'}</PoppinsText>
      <Pressable onPress={changeInformationEdit}>
        <PoppinsText styles={styles.text}>Change information</PoppinsText>
      </Pressable>
      {isInformationEdit ? (
        <PersonalInfoEditForm close={closePersonalInfoEditForm} />
      ) : (
        <PersonalInformationCards />
      )}
      <View style={styles.contaiser}>
        <PoppinsText styles={styles.title}>{'Password'}</PoppinsText>
        <Pressable onPress={changePasswordEdit}>
          <PoppinsText styles={styles.text}>Change password</PoppinsText>
        </Pressable>
      </View>
      {isPasswordEdit && <PasswordEdit close={closePasswordEditForm} />}
      <Pressable style={styles.logutButton} onPress={handleLogOut}>
        <PoppinsText styles={styles.logOutText}>Log Out</PoppinsText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
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
  contaiser: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logutButton: {
    marginTop: 10,
    width: 180,
    borderRadius: 16,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  logOutText: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 500,
  },
});

export default ProfileForm;
