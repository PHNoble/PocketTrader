import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from '../view/Home.js';
import LoginScreen from '../view/login/screen'

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

  export default class AppNavigator extends Component {

    render() {
        if(this.props.loggedIn) {
            return (
                <RootStack />
            )
        }
        else {
            return (
                <LoginScreen />
            )
        }
    }
  }