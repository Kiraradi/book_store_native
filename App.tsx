/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './Navigation/Navagation';
import {Provider} from 'react-redux';
import {makeStore} from './store';
import AuthProvider from './hocs/AuthProvider';

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
