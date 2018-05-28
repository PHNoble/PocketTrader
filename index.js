import { AppRegistry } from 'react-native';
import App from './App';
import React, {Component} from 'react';
import { Provider, Connect } from 'react-redux';

import store from './src/Store';

export default class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('pockettrader', () => index);
