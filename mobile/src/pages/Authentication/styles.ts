import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },

    text: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
    },

    newAccount: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 13,
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 16,
    },

    checkboxContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },

    checkboxText: {
        marginTop: 5
    },

    forgetPasswordText: {
        marginTop: 5,
    },

    checkboxTextContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    button: {
        marginTop: 16,
        backgroundColor: '#04d361',
        borderRadius: 8,
        padding: 16,
    },

    textButton: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 18,
    },

});

export default styles;
