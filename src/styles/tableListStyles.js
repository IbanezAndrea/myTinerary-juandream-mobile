import {StyleSheet} from "react-native"

const style = StyleSheet.create({
    tableListContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    tableListItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        heigth: "100%"
    },
    tableListItemTitle: {
        color: "#FAF3E0",
        textShadowColor: "#1E212D",
        textShadowOffset: { width: 2, heigth: 1 },
        textShadowRadius: 3,
        fontSize: 30,
        fontStyle: "italic",
        textAlign: "center",
        fontWeight: "600",
    },
    tableListItemCountry: {
        color: "#FAF3E0",
        textShadowColor: "#1E212D",
        textShadowOffset: { width: 2, heigth: 1 },
        textShadowRadius: 3,
        fontSize: 25,
    },
    tableListItemContainer: {
        flex: 1,
        flexDirection: "column",
        width: "85%",
        height: 250,
        marginTop: 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 15,
        overflow: "hidden",
        borderColor: "#000a",
        borderStyle: "solid",
        borderWidth: 4
    }
})
export default style