import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import PoppinsText from '../../../../UI/CustomsTexts/PoppinsText';
import {colors} from '../../../../assets/styles/colors';
import Clipboard from '@react-native-clipboard/clipboard';

interface IInformationCard {
  img: ImageSourcePropType;
  fildName: string;
  content: string;
}

const InformationCard: FC<IInformationCard> = props => {
  const copyToClipboard = () => {
    Clipboard.setString(props.content);
  };

  return (
    <Pressable style={styles.wrapper} onPress={copyToClipboard}>
      <Image style={styles.img} source={props.img} alt="img" />
      <View style={styles.container}>
        <PoppinsText
          styles={styles.fieldName}>{`Your ${props.fildName}`}</PoppinsText>
        <PoppinsText styles={styles.content}>{props.content}</PoppinsText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.light,
    paddingLeft: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },

  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  img: {
    width: 24,
    height: 24,
  },
  fieldName: {
    fontSize: 14,
    fontWeight: 700,
    color: colors.darkBlue,
  },
  content: {
    fontSize: 16,
    color: colors.darkBlue,
  },
});

export default InformationCard;
