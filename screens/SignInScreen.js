import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Styles from '../constants/Styles';
import InputField from "../components/InputField";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from "@react-native-async-storage/async-storage";

GoogleSignin.configure({
    webClientId: '695696156382-0qj5bsti4ar2ig1s6dceas6kbmg4gq7g.apps.googleusercontent.com',
    offlineAccess: true,
});

const handleGoogleSignIn = async (navigation) => {
    try {
        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        });
        const userInfo = await GoogleSignin.signIn();
        const token = await GoogleSignin.getTokens();
        await AsyncStorage.setItem('accessToken', token.accessToken);
        navigation.navigate('HomeScreen');
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User cancelled the login flow');
            return;
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Operation sign in is in progress');
            return;
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.error('Play services not available or outdated');
            return;
        } else {
            console.error('Error while Google sign in: ', error);
            return;
        }
    }
};

export default function SignInScreen({ navigation }) {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={Styles.headerText}>
                    Login here
                </Text>
                <Text
                    style={Styles.headerSubText}
                    adjustsFontSizeToFit={true}
                    numberOfLines={2}
                >
                    Welcome back you've been missed!
                </Text>
            </View>
            <View style={{ marginBottom: 30, marginTop: 50 }}>
                <InputField
                    label={'Email'}
                    icon={
                        <MaterialCommunityIcons
                            name="email-outline"
                            size={20}
                            color="#666"
                            style={{ paddingRight: 5 }}
                        />
                    }
                    keyboardType="email-address"
                />
                <InputField
                    label='Password'
                    icon={
                        <MaterialIcons
                            name="password"
                            size={20}
                            color="#666"
                            style={{ paddingRight: 5 }}
                        />
                    }
                    inputType='password'
                />
            </View>

            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Text style={Styles.textButton}>
                        Forgot your password ?
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={Styles.button}>
                <Text style={Styles.textInButton}>
                    Sign In
                </Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpScreen")}
                    style={{ padding: 10 }}
                >
                    <Text style={Styles.textButton}>
                        Create new account here
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={{ marginVertical: 50, }}>
                <Text style={[Styles.textButton, { textAlign: 'center' }]}>
                    Or continue with
                </Text>

                <View style={Styles.logoButtonContainer}>
                    <TouchableOpacity
                        style={Styles.logoSignInButton}
                        onPress={() => handleGoogleSignIn(navigation)}
                    >
                        <Ionicons
                            name="logo-google"
                            color='black'
                            size={20}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.logoSignInButton}>
                        <Ionicons
                            name="logo-facebook"
                            color='blue'
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
