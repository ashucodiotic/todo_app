import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';
import AboutComponent from './AboutComponent';
const Stack = createNativeStackNavigator();

const StackNavigationComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LoginComponent} />
                <Stack.Screen name="Profile" component={ProfileComponent} />
                <Stack.Screen name="About" component={AboutComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigationComponent