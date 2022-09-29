import {StyleSheet} from "react-native"

const style = StyleSheet.create({
    itinerarycontainer:{
        marginTop: 10,
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#1E212D',
        color: "#FAF3E0",
        marginBottom: 6,
        borderStyle: 'solid',
        borderColor: '#1E212D' ,
        borderWidth: 6,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
    },
    itineraryname:{
        padding:8,
        color: "#FAF3E0",
        fontWeight: 'bold',
        fontSize: 18
    },
    itinerarytext1:{
        color: "#FAF3E0",
        margin: 2,
        fontWeight: 'bold'
    },
    itinerarybody:{
        flex:1,
        justifyContent:"center",
    },
    itinerarydata:{    
        flex:1,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 2,
    },
    itinerarydescription:{
        padding: 10,
        color: "#FAF3E0",
        fontSize: 14
    },
    itinerarydatap:{
        padding: 5,
        color: "#FAF3E0",
        fontSize: 14,
        alignSelf: 'center'
    }


})
export default style