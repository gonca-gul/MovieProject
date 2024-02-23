import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import MovieListScreen from '../../screens/MovieListScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer
      ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="MovieListScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MovieListScreen" component={MovieListScreen} />
       {/*  <Stack.Screen name="LoggedOut" component={LoggedOut} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
