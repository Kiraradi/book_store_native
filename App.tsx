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

function App(): React.JSX.Element {
  return (
    <Provider store={makeStore}>
      <Navigation />
    </Provider>
  );
}

export default App;
