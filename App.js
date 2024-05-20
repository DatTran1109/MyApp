import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigator from './navigators/AuthNavigator';
import MainNavigator from './navigators/MainNavigator';

export default function App() {
  const [accessToken, setAccessToken] = useState('');

  const checkLogin = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    accessToken && setAccessToken(accessToken);
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <NavigationContainer>
        {accessToken ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
