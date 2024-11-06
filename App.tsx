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
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NotifierWrapper} from 'react-native-notifier';

function App(): React.JSX.Element {
  return (
    <Provider store={makeStore}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NotifierWrapper>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </NotifierWrapper>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
