import React, { Component } from 'react';
import store from './redux/store'
import { Provider } from 'react-redux';
import Navigation from './modules/Navigation';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}
