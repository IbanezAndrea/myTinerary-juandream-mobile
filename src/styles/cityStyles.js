import {StyleSheet} from "react-native"

const style = StyleSheet.create({
    cityMain: {
        padding: 8,
        height: '100%',
        marginBottom: 6,
    },
    cityContainer: { 
    flex:1,
    justifyContent: 'center',
    marginBottom: 6,
    },
    cityItem: {
        width: '100%',
        height: 300,
    },
    cityItemTitle: {
        color: "#FAF3E0",
        textAlign: 'center',
        textShadowColor: "#1E212D",
        textShadowOffset: { width: 2, heigth: 1 },
        textShadowRadius: 3,
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: "600",
    },
    cityPDiv: { 
    padding: 12,
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#1E212D',
    color: "#FAF3E0",
    textShadowColor: "#1E212D",
    textShadowOffset: { width: 2, heigth: 1 },
    textShadowRadius: 3,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    },
    cityPInnerdiv: {
        backgroundColor: '#1E212D',
        color: "#FAF3E0",
    },
    cityInnerP: {
        lineHeight: 30,
        color: "#FAF3E0",
        fontWeight: 'bold',
        fontSize: 18,
        margin: 1
    },
    cityPSpan: {
    },
    cityP: {
        color: "#FAF3E0",
        margin: 4,
    },
    citySubtitle: {
        margin: 2,
        padding: 10,
        color: "#FAF3E0",
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf:'center',
        textShadowColor: "#1E212D",
        textShadowOffset: { width: 4, heigth: 2 },
        textShadowRadius: 3,
    },
    details:{
        borderStyle: 'solid',
        borderColor: '#1E212D' ,
        borderWidth: 6,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
    },

})
export default style