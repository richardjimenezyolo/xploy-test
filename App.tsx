import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from './src/screens/Login'
import Calculator from './src/screens/calculator/Calculator';
import { useColorScheme } from 'react-native';


const Stack = createNativeStackNavigator();
const App = () => {

  const color = useColorScheme()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen
          component={Login}
          name='Login'
        />

        <Stack.Screen
          component={Calculator}
          name='Calculator'
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;