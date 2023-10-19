import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './app/screens/auth/signIn';
import RootNavigation from './app/navigation/rootNavigation';
import HomeScreen from './app/screens/app/home';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignInScreen /> */}
      <HomeScreen />
      {/* <RootNavigation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
