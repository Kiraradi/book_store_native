import React, {FC, ReactNode, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../store/hooks/useAppSelector';
import Spinner from '../UI/Spinner/Spinner';
import UserApi from '../services/UserApi';
import {useAppDispatch} from '../store/hooks/useAppDispatch';
import {addUser, changePending} from '../store/user/UserSliсe';

interface IAuthProvider {
  children: ReactNode;
}
const AuthProvider: FC<IAuthProvider> = props => {
  const dispatch = useAppDispatch();
  const pending = useAppSelector(store => store.user.pending);

  useEffect(() => {
    const checkUser = async () => {
      const user = await UserApi.getMe().catch(() => {
        return null;
      });
      dispatch(changePending(false));
      dispatch(addUser(user));
    };

    checkUser();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {pending ? <Spinner /> : props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthProvider;
