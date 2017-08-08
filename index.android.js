import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator'

const middleware = [ thunk ];

class magical extends React.Component {
  store = createStore(AppReducer, applyMiddleware(...middleware));

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('magical', () => magical);
