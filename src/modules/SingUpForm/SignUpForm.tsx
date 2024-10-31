import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {SingUpSchema} from './SignUpSchema';
import CustomInput from '../../UI/Components/CustomInput/CustomInput';
import {FONT_FAMILY} from '../../../config/customFont';
import {colors} from '../../assets/styles/colors';
import TextError from '../../UI/TextError/TextError';
import CustomButton from '../../UI/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import PoppinsText from '../../UI/CustomsTexts/PoppinsText';
import {ISignUpData} from '../../interfaces';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import {signUpUserThunk} from '../../store/Thunks';

const SingUpForm: FC = () => {
  const [isPasswordSecure, setPasswordSecure] = useState(true);
  const [isPasswordReplaySecure, setPasswordReplaySecure] = useState(true);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {
    watch,
    control,
    formState: {errors},
  } = useForm<ISignUpData>({
    resolver: yupResolver(SingUpSchema),
    mode: 'onChange',
  });

  const handleSignUpUser = async () => {
    if (!watch('email') || !watch('password') || !watch('passwordReplay')) {
      return;
    }
    if (errors.email || errors.password || errors.passwordReplay) {
      return;
    }

    if (watch('password') !== watch('passwordReplay')) {
      return;
    }

    const data = {
      email: watch('email'),
      password: watch('password'),
    };

    dispatch(signUpUserThunk(data));
  };

  const changePasswordSecure = () => {
    setPasswordSecure(prev => !prev);
  };

  const changePasswordReplaySecure = () => {
    setPasswordReplaySecure(prev => !prev);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.conteiner}>
        <Controller<ISignUpData>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <CustomInput
                img={require('../../assets/icons/Mail.png')}
                value={value}
                onChange={value => onChange(value)}
                placeholder="Email"
                isSecure={false}
                validationStatus={
                  value?.length > 0
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
          text="Enter your email"
          isBeingFilledIn={watch('email')?.length > 0}
          validationStatus={
            watch('email')?.length > 0
              ? errors.email?.message
                ? 'error'
                : 'success'
              : null
          }
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<ISignUpData>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <CustomInput
                img={
                  isPasswordSecure
                    ? require('../../assets/icons/Hide.png')
                    : require('../../assets/icons/View.png')
                }
                value={value}
                onChange={value => onChange(value)}
                placeholder="Password"
                isSecure={isPasswordSecure}
                callbackForImg={changePasswordSecure}
                validationStatus={
                  value?.length > 0
                    ? errors.password?.message
                      ? 'error'
                      : 'success'
                    : null
                }
              />
            );
          }}
          name="password"
          rules={{required: true}}
        />
        <TextError
          fieldName="Password"
          text="Enter your password"
          isBeingFilledIn={watch('password')?.length > 0}
          validationStatus={
            watch('password')?.length > 0
              ? errors.password?.message
                ? 'error'
                : 'success'
              : null
          }
        />
      </View>
      <View style={styles.conteiner}>
        <Controller<ISignUpData>
          control={control}
          render={({field: {onChange, value}}) => {
            return (
              <CustomInput
                img={
                  isPasswordReplaySecure
                    ? require('../../assets/icons/Hide.png')
                    : require('../../assets/icons/View.png')
                }
                value={value}
                onChange={value => onChange(value)}
                placeholder="Password replay"
                isSecure={isPasswordReplaySecure}
                callbackForImg={changePasswordReplaySecure}
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
          fieldName="Password Replay"
          text="Repeat your password without errors"
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
      <View style={styles.buttonBar}>
        <CustomButton
          text={'Sign Up'}
          callBack={handleSignUpUser}
          styles={styles.button}
        />
        <PoppinsText styles={styles.text}>or</PoppinsText>
        <CustomButton
          text="Log In"
          callBack={() => {
            navigation.goBack();
          }}
          styles={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    gap: 15,
  },
  title: {
    fontFamily: FONT_FAMILY.Poppins_Bold,
    fontSize: 40,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 20,
  },
  conteiner: {
    flexDirection: 'column',
    gap: 15,
  },
  buttonBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  button: {
    width: 160,
  },
});

export default SingUpForm;
