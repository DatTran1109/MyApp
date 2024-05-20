import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/InputField";
import Styles from '../constants/Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import AsyncStorage from "@react-native-async-storage/async-storage";

GoogleSignin.configure({
    webClientId: '695696156382-0qj5bsti4ar2ig1s6dceas6kbmg4gq7g.apps.googleusercontent.com',
    offlineAccess: true,
});

const handleGoogleSignIn = async (navigation) => {
    await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
    });

    try {
        await GoogleSignin.hasPlayServices();
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

const data = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];

export default function RegisterScreen({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onChange = (e, selectedDate) => {
        setDate(selectedDate);
        setShow(false);
    }

    const showMode = (mode) => {
        setShow(true);
        setMode(mode);
    }

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: "center" }}>
                    <Text style={Styles.headerText}>
                        Create account
                    </Text>
                    <Text
                        style={Styles.headerSubText}
                        adjustsFontSizeToFit={true}
                        numberOfLines={2}
                    >
                        Create an account so you can explore all interesting things
                    </Text>
                </View>
                <View style={{ marginTop: 50, marginBottom: 5 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 2,
                            alignItems: 'center',
                            paddingBottom: 5,
                            marginBottom: 25,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FontAwesome
                                style={{ paddingRight: 5 }}
                                name='birthday-cake'
                                size={20}
                                color='#666'
                            />
                            <Text style={{ fontSize: 16 }}>Birthday: </Text>
                            <TouchableOpacity
                                onPress={() => showMode('date')}
                            >
                                <Text style={{ fontSize: 16 }}>{date.getDate() < 10 ? 0 : null}{date.getDate()}/{date.getMonth() >= 9 ? null : 0}{date.getMonth() + 1}/{date.getFullYear()}</Text>
                            </TouchableOpacity>
                        </View>

                        {show && <DateTimePicker
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />}

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FontAwesome
                                style={{ paddingRight: 3 }}
                                name='transgender'
                                size={20}
                                color='#666'
                            />
                            <Text style={{ fontSize: 16 }}>Gender: </Text>
                            <Dropdown
                                style={[Styles.dropdown, isFocus && { borderColor: '#4caf50', borderWidth: 1 }]}
                                placeholderStyle={{ fontSize: 14 }}
                                selectedTextStyle={{ fontSize: 14 }}
                                data={data}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select gender' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={(item) => {
                                    setValue(item.value);
                                    setIsFocus(false);
                                }}
                                renderItem={(item) => (
                                    <View style={Styles.dropdownList}>
                                        {item.value == 'male' ? <MaterialCommunityIcons
                                            name="gender-male"
                                        /> : null}
                                        {item.value == 'female' ? <MaterialCommunityIcons
                                            name="gender-female"
                                        /> : null}{item.value == 'other' ? <MaterialCommunityIcons
                                            name="gender-non-binary"
                                        /> : null}
                                        <Text style={{ paddingLeft: 10 }}>{item.label}</Text>
                                    </View>
                                )}
                            />
                        </View>

                    </View>
                    <InputField
                        label={'Your name'}
                        icon={
                            <MaterialIcons
                                name="drive-file-rename-outline"
                                size={20}
                                color="#666"
                                style={{ paddingRight: 5 }}
                            />
                        }
                    />
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
                    <InputField
                        label='Confirm Password'
                        icon={
                            <MaterialCommunityIcons
                                name="form-textbox-password"
                                size={20}
                                color="#666"
                                style={{ paddingRight: 5 }}
                            />
                        }
                        inputType='password'
                    />
                </View>
                <TouchableOpacity style={Styles.button}>
                    <Text style={Styles.textInButton}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignInScreen")}
                        style={{ padding: 10 }}
                    >
                        <Text style={Styles.textButton}>
                            Already have an account? Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 30 }}>
                    <Text style={[Styles.textButton, { textAlign: 'center' }]}>
                        Or continue with
                    </Text>
                    <View style={Styles.logoButtonContainer}>
                        <TouchableOpacity
                            style={Styles.logoSignUpButton}
                            onPress={() => handleGoogleSignIn(navigation)}
                        >
                            <Ionicons
                                name="logo-google"
                                color='black'
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.logoSignUpButton}>
                            <Ionicons
                                name="logo-facebook"
                                color='blue'
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
