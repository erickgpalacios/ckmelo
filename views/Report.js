import React, { Component } from 'react';
import { Alert } from 'react-native';
import MyForm from '../Forms/ReportForm';
import { addRegister } from '../services/Service'
export default class Report extends Component {
    static navigationOptions = {
       
    };
    render() {
        return <MyForm
            onSubmit={(values) => {
                addRegister(1, values.Register).
                    then(
                        resp => {
                            if (resp.idReport != null) { Alert.alert('Alert', 'Tu dispositivo fue registrado') }
                            else { Alert.alert('Alert', resp) }
                        }
                    )
            }}  />
    }
}
