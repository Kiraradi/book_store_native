/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/Navigation/Navagation';
import {Provider} from 'react-redux';
import {makeStore} from './src/store';
import AuthProvider from './src/hocs/AuthProvider';
import {NotifierWrapper} from 'react-native-notifier';

function App(): React.JSX.Element {
  return (
    <Provider store={makeStore}>
      <NotifierWrapper>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NotifierWrapper>
    </Provider>
  );
}

export default App;
