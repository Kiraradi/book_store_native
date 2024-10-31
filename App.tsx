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

function App(): React.JSX.Element {
  return (
    <Provider store={makeStore}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </Provider>
  );
}

export default App;
