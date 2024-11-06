import React, {FC, useState} from 'react';
import {useAppDispatch} from '../../../../store/hooks/useAppDispatch';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IEditUserPassword} from '../../../../interfaces';
import {PasswordEditSchema} from './PasswordEditSchema';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../../../../UI/CustomButton/CustomButton';
import CustomInput from '../../../../UI/Components/CustomInput/CustomInput';
import TextError from '../../../../UI/TextError/TextError';
import {editUserPasswordThunk} from '../../../../store/user/thunks';
import {showNotification} from '../../../../services/Notification';

interface IPasswordEdit {
  close: () => void;
}

const PasswordEdit: FC<IPasswordEdit> = props => {
  const [isOldPasswordSecure, setOldPasswordSecure] = useState(true);
  const [isNewPasswordSecure, setNewPasswordSecure] = useState(true);
  const [isNewPasswordReplaySecure, setNewPasswordReplaySecure] =
    useState(true);
  const dispatch = useAppDispatch();
  const {
    watch,
    control,
    formState: {errors, isValid},
    handleSubmit,
  } = useForm<IEditUserPassword>({
    resolver: yupResolver(PasswordEditSchema),
    mode: 'all',
  });

  const handleEditPassword = (formData: IEditUserPassword) => {
    if (formData.newPassword !== formData.passwordReplay) {
      showNotification('Passwords do not match', 'error');
      return;
    }

    const data = {
      password: watch('oldPassword'),
      newPassword: watch('newPassword'),
    };

    dispatch(editUserPasswordThunk(data))
      .unwrap()
      .catch(() => {
        showNotification('Oops something went wrong', 'error');
      });
    showNotification('Password changed successfully', 'success');
    props.close();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.conteiner}>
        <Controller<IEditUserPassword>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <CustomInput
                img={
                  isOldPasswordSecure
                    ? require('../../../../assets/icons/Hide.png')
                    : require('../../../../assets/icons/View.png')
                }
                value={value}
                onChange={value => onChange(value)}
                placeholder="Old Password"
                isSecure={isOldPasswordSecure}
                callbackForImg={() => setOldPasswordSecure(prev => !prev)}
                validationStatus={
                  value?.length > 0
                    ? errors.oldPassword?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="oldPassword"
          rules={{required: true}}
        />
        <TextError
          fieldName="Old Password"
          text="Enter your old password"
          isBeingFilledIn={watch('oldPassword')?.length > 0}
          validationStatus={
            watch('oldPassword')?.length > 0
              ? errors.oldPassword?.message
                ? 'error'
                : 'success'
              : null
          }
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<IEditUserPassword>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <CustomInput
                img={
                  isNewPasswordSecure
                    ? require('../../../../assets/icons/Hide.png')
                    : require('../../../../assets/icons/View.png')
                }
                value={value}
                onChange={value => onChange(value)}
                placeholder="New Password"
                isSecure={isNewPasswordSecure}
                callbackForImg={() => setNewPasswordSecure(prev => !prev)}
                validationStatus={
                  value?.length > 0
                    ? errors.newPassword?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="newPassword"
          rules={{required: true}}
        />
        <TextError
          fieldName="new Password"
          text="Enter your new password"
          isBeingFilledIn={watch('newPassword')?.length > 0}
          validationStatus={
            watch('newPassword')?.length > 0
              ? errors.newPassword?.message
                ? 'error'
                : 'success'
              : null
          }
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<IEditUserPassword>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <CustomInput
                img={
                  isNewPasswordReplaySecure
                    ? require('../../../../assets/icons/Hide.png')
                    : require('../../../../assets/icons/View.png')
                }
                value={value}
                onChange={value => onChange(value)}
                placeholder="New Password Replay"
                isSecure={isNewPasswordReplaySecure}
                callbackForImg={() => setNewPasswordReplaySecure(prev => !prev)}
                validationStatus={
                  value?.length > 0
                    ? errors.passwordReplay?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="passwordReplay"
          rules={{required: true}}
        />
        <TextError
          fieldName="New Password Replay"
          text="Enter your new password replay"
          isBeingFilledIn={watch('passwordReplay')?.length > 0}
          validationStatus={
            watch('passwordReplay')?.length > 0
              ? errors.passwordReplay?.message
                ? 'error'
                : 'success'
              : null
          }
        />
      </View>
      <CustomButton
        disabled={!isValid}
        text={'Confirm'}
        callBack={handleSubmit(handleEditPassword)}
        styles={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: 15,
  },
  conteiner: {
    flexDirection: 'column',
    gap: 15,
    alignContent: 'flex-start',
  },
  text: {
    fontSize: 18,
  },
  button: {
    width: 180,
  },
});

export default PasswordEdit;
