import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { View, Text } from 'react-native';
import AboutComponent from './AboutComponent';
import BlogComponent from './BlogComponent';
import SettingComponent from './SettingComponent';
const Tab = createMaterialTopTabNavigator();
const TabNavibarComponent = () => {
    return (
        // <View><Text>set </Text></View>
        <>
        < Tab.Navigator >
            <Tab.Screen name="setting" component={SettingComponent} />
            <Tab.Screen name="Blog" component={BlogComponent} />
            <Tab.Screen name="About" component={AboutComponent} />
        </Tab.Navigator >
        </>
    )
}

export default TabNavibarComponent