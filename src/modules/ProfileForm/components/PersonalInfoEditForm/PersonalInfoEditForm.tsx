import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {PersonalInfoEditFormSchema} from './PersonalInfoEditFormSchema';
import TextError from '../../../../UI/TextError/TextError';
import {Controller, useForm} from 'react-hook-form';
import CustomInput from '../../../../UI/Components/CustomInput/CustomInput';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAppSelector} from '../../../../store/hooks/useAppSelector';
import CustomButton from '../../../../UI/CustomButton/CustomButton';
import {IEditUserData} from '../../../../interfaces';
import {useAppDispatch} from '../../../../store/hooks/useAppDispatch';
import {editUserThunk} from '../../../../store/Thunks';

const PersonalInfoEditForm: FC = () => {
  const email = useAppSelector(state => state.user.user?.email);
  const dispatch = useAppDispatch();
  const {
    watch,
    control,
    formState: {errors},
  } = useForm<IEditUserData>({
    resolver: yupResolver(PersonalInfoEditFormSchema),
    mode: 'all',
  });

  const checkEmai = (): boolean => {
    const data = watch('email');
    if (!data) {
      return false;
    }

    if (data.length <= 0) {
      return false;
    }

    return true;
  };
  const handleEditInfo = async () => {
    if (errors.email || errors.fullName) {
      return;
    }
    const fillName = watch('fullName');
    const data: IEditUserData = {};
    if (fillName && fillName.length > 0) {
      data.fullName = fillName;
    }
    if (watch('email') && watch('email') !== email) {
      data.email = watch('email');
    }
    dispatch(editUserThunk(data));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.conteiner}>
        <Controller<IEditUserData>
          control={control}
          render={({field: {onChange, value}}) => {
            const newValue = value ? value : '';
            return (
              <CustomInput
                img={require('../../../../assets/icons/Profile.png')}
                value={newValue}
                onChange={value => onChange(value)}
                placeholder="New Name"
                isSecure={false}
                validationStatus={
                  newValue?.length > 0
                    ? errors.fullName?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="fullName"
          rules={{required: true}}
        />
        <TextError
          fieldName="Name"
          text="Enter your new name"
          isBeingFilledIn={false}
          validationStatus={
            false ? (errors.fullName?.message ? 'error' : 'success') : null
          }
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<IEditUserData>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <CustomInput
                img={require('../../../../assets/icons/Mail.png')}
                value={value}
                onChange={value => onChange(value)}
                placeholder="New Email"
                isSecure={false}
                validationStatus={
                  value && value?.length > 0
                    ? errors.email?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="email"
          rules={{required: true}}
        />
        <TextError
          fieldName="Email"
          text="Enter your new email"
          isBeingFilledIn={checkEmai()}
          validationStatus={
            checkEmai() ? (errors.email?.message ? 'error' : 'success') : null
          }
        />
      </View>
      <CustomButton
        text={'Confirm'}
        callBack={handleEditInfo}
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

export default PersonalInfoEditForm;
