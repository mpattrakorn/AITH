import {
    StyleSheet
} from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    scoreRow: {
        backgroundColor: 'black',
        flexDirection: 'row',
        flex: 7,

    },

    textScore: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },

    textTime: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },

    highScore: {
        flex: 1,
        backgroundColor: '#003333'
    },

    timeCount: {
        flex: 1,
        backgroundColor: '#ffb734'
    },
    currentScore: {
        flex: 1,
        backgroundColor: '#003333'
    },
    holesRows: {
        backgroundColor: 'darkgrey',
        flex: 6,
        flexDirection: 'column'
    },
    holesRow: {
        backgroundColor: '#149491',
        flex: 12,
        flexDirection: 'row'
    },
    hole: {
        flex: 1,
        backgroundColor: '#cedee9',
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonRow: {
        padding: 10,
        flex: 3
    },

    buttonStyle: {
        backgroundColor: 'teal',
        padding: 10,
        borderRadius: 10,
        width: 200,
    },

    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'

    },

    animal: {
        fontSize: 60,
        textAlign: 'center'
    },

    touch: {
        flex: 1,
        alignItems: 'center',
        width: 100,
        justifyContent: 'center'
    }


});