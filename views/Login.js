import React, { Component } from 'react';
import { Alert } from 'react-native';
import MyForm from '../Forms/LoginForm';
import { ValidateLogin } from '../services/Service'
export default class MyComponent extends Component {
    static navigationOptions = {
        header: null 
    };
    render() {
        return <MyForm handle1={() => this.props.navigation.push('Home')}
            onSubmit={(values) => {
                ValidateLogin(values.Email, values.Password).
                    then(
                        resp => {
                            if (resp.idUser != null) { this.props.navigation.push('Home') }
                            else { Alert.alert('Alert', resp) }
                        }
                    )
            }} />
    }
}
