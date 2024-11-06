import {Notifier, NotifierComponents} from 'react-native-notifier';

export const showNotification = (title: string, type: 'success' | 'error') => {
  Notifier.showNotification({
    title: title,
    duration: 1500,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: type,
    },
  });
};
