import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AuthNavigator from './navigators/AuthNavigator';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeScreen } from './screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
