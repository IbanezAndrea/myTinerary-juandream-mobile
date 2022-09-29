import {StyleSheet} from "react-native"

const style = StyleSheet.create({
    commentcontainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    usercomment: {
        marginTop: 14,
        alignItems: 'center'
    },
    commentname:{
        color: '#FAF3E0',
        fontWeight: 'bold',
        fontSize: 16
    },
    commentlastname: {
        color: '#FAF3E0',
        fontWeight: 'bold',
        fontSize: 16
    },
    comment:{
        margin: 8 ,
        padding:4,
        backgroundColor: '#3b3b3b',
        width: '100%',
        height: 60,
        borderRadius: 4
    },
    commentp:{
        padding: 4,
        color: '#FAF3E0',
        fontSize: 16
    },
    commentsbtn:{
        backgroundColor: '#FAF3E0',
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',
    },
    pressedbtn:{
        alignSelf:'center',
        backgroundColor: '#FAF3E0',
        padding: 10,
        borderRadius: 20,
    },
    text:{
    fontSize: 18,
    color: '#1E212D',
    fontWeight: 'bold'
    },
    nocomments:{
        margin: 20,
        fontSize: 16,
        color: '#FAF3E0',
        fontWeight: 'bold'
    }
})
export default style