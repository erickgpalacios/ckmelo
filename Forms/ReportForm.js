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
            <Text style={styles.formtxt}>Registra tu dispositivo robado</Text>

            <Text style={styles.formtxt}>IMEI</Text>
            <Field
                name={'Register'}
                component={MyTextInput}
            />

            <TouchableOpacity onPress={() => { props.handleSubmit(); props.reset() }}>
                <Text style={styles.formSubmit}>Agregar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}


export default reduxForm({
    form: 'Report'
})(MyForm);