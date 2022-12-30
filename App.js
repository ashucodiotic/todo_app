/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
// import { AuthComponent } from './screens/AuthComponent';
import DrawerComponent from './screens/DrawerComponent';
import { store } from './src/redux/store';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <>
      <Provider store={store}>
        <DrawerComponent/>
      </Provider>
    </>
  )
}





export default App;
