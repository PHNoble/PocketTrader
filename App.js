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
import {View, StyleProvider, Root} from 'native-base';

import AppNavigator from './js/navigator/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.user != nextState.user;
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
      console.log(user);
      SplashScreen.hide();
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    return (
      <StyleProvider style={getTheme(theem)}>
        <Root>
          <AppNavigator loggedIn={this.state.user != null}/>
        </Root>
      </StyleProvider>  
    );
  }
}




