import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sizes, spacing } from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainHeader = ({ title, navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Ionicons name="home-outline" size={25} onPress={() => { }} />
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons name="logout" size={25} onPress={async () => {
        try {
          await GoogleSignin.signOut();
          await AsyncStorage.setItem('accessToken', '');
          navigation.navigate('WelcomeScreen');
        } catch (error) {
          console.log(error);
        }
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
  },
});

export default MainHeader;
