import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';


import MyTextInput from './TextInput';
import styles from '../Styles/loginStyle';

/**
 * Automatically adds the dashes required by the specified phone format and limits the input to ten characters
 */


function MyForm(props) {
    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
            <Image
                source={require('../images/img.png')}
                style={styles.formlogo}
            />
            <Text style={styles.formtxt}>Email</Text>
            <Field
                name={'Email'}
                component={MyTextInput}
                placeholder={'mymail@domain.com'}
            />
            <Text style={styles.formtxt}>Password</Text>
            <Field 
                name={'Password'}
                component={MyTextInput}
                placeholder={'******'}
                type="password"
            />
            
            <TouchableOpacity onPress={props.handleSubmit}>
                <Text style={styles.formSubmit}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.handle1}>
                <Text style={styles.formSubmit}>Entrar sin Registro</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}


export default reduxForm({
    form: 'signIn'
})(MyForm);