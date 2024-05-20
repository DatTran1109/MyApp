import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, SignInScreen, SignUpScreen, WelcomeScreen } from "../screens";

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigator;