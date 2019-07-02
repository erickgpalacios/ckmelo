import React from 'react';
import { reduxForm, Field, reset} from 'redux-form';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';

import MyTextInput from './TextInput';
import styles from '../Styles/checkStyle';

/**
 * Automatically adds the dashes required by the specified phone format and limits the input to ten characters
 */

function MyForm(props) {
    
    return (<View style={{ flex: 1, alignContent:"flex-start" }}>
        <View style={styles.viewbtn}>
        <TouchableOpacity onPress={props.handle2} >
            <Image
                source={require('../images/plus.png')}
                style={styles.formlogo}
            />
            </TouchableOpacity>
            </View>
        <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
            <Text style={styles.subTitle}>Revisa reporte de robo </Text>

            <Text style={styles.formLb}>IMEI</Text>
            <Field
                name={'Register'}
                component={MyTextInput}
            />

            <TouchableOpacity onPress={() => { props.handleSubmit(); props.reset() }}>
                <Text style={styles.formSubmit}>Verificar</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
    );
}


export default reduxForm({
    form: 'checkIn'
})(MyForm);