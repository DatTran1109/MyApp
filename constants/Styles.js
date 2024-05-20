import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#4caf50',
        marginVertical: 35,
    },
    headerSubText: {
        fontSize: 20,
        fontWeight: '500',
        maxWidth: "60%",
        textAlign: "center",
    },
    textButton: {
        color: '#4caf50',
        fontSize: 16,
    },
    textInButton: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
    },
    button: {
        padding: 20,
        backgroundColor: '#4caf50',
        marginVertical: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    logoButtonContainer: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "center",
    },
    logoSignInButton: {
        padding: 10,
        backgroundColor: "#ECECEC",
        borderRadius: 52,
        marginHorizontal: 10,
    },
    logoSignUpButton: {
        padding: 10,
        backgroundColor: '#ECECEC',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    dropdown: {
        height: 50,
        width: 84,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 7,
    },
    dropdownList: {
        flexDirection: 'row',
        padding: 12,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    carouselContainer: {
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselImage: {
        height: Dimensions.get('window').width - 140,
        width: Dimensions.get('window').width - 22,
        borderRadius: 15,
    },
    carouselText: {
        marginTop: 40,
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
    },
    signupButton: {
        backgroundColor: '#4caf50',
        padding: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    loginButton: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: '#4caf50',
        fontSize: 16,
        fontWeight: '500',
    },
    signupText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default Styles;