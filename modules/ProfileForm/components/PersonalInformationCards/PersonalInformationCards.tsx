import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import InformationCard from '../InformationCard/InformationCard';
import {useAppSelector} from '../../../../store/hooks/useAppSelector';

const PersonalInformationCards: FC = () => {
  const email = useAppSelector(state => state.user.user?.email);
  const fullName = useAppSelector(state => state.user.user?.fullName);
  return (
    <View style={styles.wrapper}>
      <InformationCard
        img={require('../../../../assets/icons/Profile.png')}
        fildName="name"
        content={fullName ? fullName : ''}
      />
      <InformationCard
        img={require('../../../../assets/icons/Mail.png')}
        fildName="email"
        content={email ? email : ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    width: '100%',
    gap: 15,
  },
});

export default PersonalInformationCards;
