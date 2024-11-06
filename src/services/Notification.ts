import {Notifier, NotifierComponents} from 'react-native-notifier';
import {colors} from '../assets/styles/colors';

export const showNotification = (title: string, type: 'success' | 'error') => {
  Notifier.showNotification({
    title: title,
    duration: 1500,
    Component: NotifierComponents.Alert,
    componentProps: {
      backgroundColor: type === 'success' ? colors.green : colors.red,
      alertType: type,
    },
  });
};
