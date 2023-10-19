import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from '../screens/auth/signIn';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='signin' component={SigninScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})