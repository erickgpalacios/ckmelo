import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    value: {
        fontSize: 80
    },
    random: {
        fontSize: 25
    },
    subtitle:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 5,
		marginTop:10
    },
	rows:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    first: {
		marginRight:100
    },
    btntype:{
        maxWidth: 100,
        resizeMode: 'contain'
    }
});
