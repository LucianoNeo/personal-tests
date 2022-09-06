import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Confirm from '../screens/Confirm';
import Forgot from '../screens/Forgot';
import Reset from '../screens/Reset';
import Home from '../screens/Home';



const Stack = createNativeStackNavigator();



const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ConfirmEmail" component={Confirm} />
        <Stack.Screen name="ForgotPassword" component={Forgot} />
        <Stack.Screen name="NewPassword" component={Reset} />

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
