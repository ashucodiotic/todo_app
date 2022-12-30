import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NotificationsScreen from './NotificationsScreen';
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';
import AboutComponent from './AboutComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../src/redux/slices/AuthSlice';
import ProductComponent from './ProductComponent';
import BlogComponent from './BlogComponent';
import LogoutComponent from './LogoutComponent';
import StyleComponent from './StyleComponent';
// import LogoutComponet from './LogoutComponet';

function HomeScreen({ navigation }) {

    return (
        <>
            <ProductComponent />
        </>

    );
}





const Drawer = createDrawerNavigator();
const DrawerComponent = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const logout = ({ navigation }) => {
        dispatch(setLogin(false))
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login">
                {
                    auth.isAuthLogin ? (<>
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Profile" component={ProfileComponent} />
                        <Drawer.Screen name="Blog" component={BlogComponent} />
                        <Drawer.Screen name="style" component={StyleComponent} />
                        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                        <Drawer.Screen name="About" component={AboutComponent} />
                        <Drawer.Screen name="Logout" listeners={logout} component={LogoutComponent} />
                    </>
                    ) : (<>
                        <Drawer.Screen name="Login" component={LoginComponent} />
                    </>)}


            </Drawer.Navigator>

        </NavigationContainer>
    );
}

export default DrawerComponent