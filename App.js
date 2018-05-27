/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import getTheme from './native-base-theme/components';
import theem from './native-base-theme/variables/theem';
import Home from './js/view/Home.js';
import {View, StyleProvider, Root} from 'native-base';
import { createStackNavigator } from 'react-navigation';


export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(theem)}>
        <Root>
          <RootStack />
        </Root>
      </StyleProvider>  
    );
  }
}

const RootStack = createStackNavigator({
  Main: {
    screen: Home,
  },
}, {
  navigationOptions: {
    header: null,
  }
}
);


