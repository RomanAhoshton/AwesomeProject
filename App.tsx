/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigator from './src/navigation/index';
import {store} from './src/redux/store.ts'; // Імпортуємо store
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
