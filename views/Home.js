import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../Styles/homeStyle';

export default class Home extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.subtitle} >Selecciona una categoria para verificar:</Text>
                <View style={styles.rows}>
                    <TouchableOpacity style={styles.first} onPress={() => this.props.navigation.push('Check')}>
                        <Image
                            source={require('../images/phone.png')}
                            style={styles.btntype}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Check')}>
                        <Image
                            source={require('../images/pc.png')}
                            style={styles.btntype}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.rows}>
                    <TouchableOpacity style={styles.first} onPress={() => this.props.navigation.push('Check')}>
                    <Image
                            source={require('../images/watch.png')}
                            style={styles.btntype}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Check')}>
                        <Image
                            source={require('../images/car.png')}
                            style={styles.btntype}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
