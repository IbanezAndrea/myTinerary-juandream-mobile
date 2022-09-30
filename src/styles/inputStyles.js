import {StyleSheet} from "react-native"

const style = StyleSheet.create({
    formLabel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#1E212D',
    },
    formP: {
        fontSize: 18,
        color:'#FAF3E0',
    },
    formInput: {
        fontSize: 18,
        backgroundColor:'#FAF3E0',
        borderRadius: 20,
        padding: 8,
        margin: 20,
        width: 180
    },
    form: {
        margin: 20,
        padding: 20,
        fontSize: 18,
        backgroundColor: '#1E212D',
        borderRadius: 20,
    },
    formButton: {
        margin: 40,
        backgroundColor: '#FAF3E0',
        padding: 10,
        width: '50%',
        borderRadius: 20,
        alignSelf:"center",
        alignItems: 'center'
    },
    textBtn: {
        color:'#1E212D',
        fontWeight: 'bold',
        fontSize: 18
    },
    welcome:{
        fontSize: 18,
        backgroundColor:'#FAF3E0',
        borderRadius: 20,
        padding: 8,
        margin: 20,
        width: 180
    }
})
export default style