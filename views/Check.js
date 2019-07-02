import React, { Component } from 'react';
import { Alert } from 'react-native';
import MyForm from '../Forms/CheckForm';
import { wsCheck } from '../services/Service'
export default class Check extends Component {
   
    render() {   
        return <MyForm handle2={() => { this.props.navigation.push('Report')}}
                onSubmit={(values) => {
                    wsCheck(1,values.Register).
                        then(
                            resp => {
                                if (resp != null) { Alert.alert('Alert', 'No robado') }
                                else { Alert.alert('Alert', 'Con reporte de robo') }
                            }
                        )
                }}  />
    }
}
