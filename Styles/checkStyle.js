import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 45,
        backgroundColor: 'white',
    },
    formlogo: {
        maxWidth: 50,
        resizeMode: 'contain',
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    formLb: {
        marginTop: 20
    },
    formSubmit: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 25,
        padding: 5
    },
    viewbtn:{ 
          flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop:20
    }
})