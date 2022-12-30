import React, { useState } from 'react'
import { Form, FormItem } from 'react-native-form-component';

import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../src/redux/slices/AuthSlice';

const styles = StyleSheet.create({
    colors: {
        paddingTop: 10,
        color: "blue",
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20

    },

    input: {
        borderWidth: 1,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderBottomWidth: 2
        // backgroundColor:'red'
    },

    container: {

        paddingHorizontal: 50,
        paddingVertical: 80,
        backgroundColor: 'white',
        flex: 1
    }
})
const LoginComponent = ({ navigation }) => {


    const dispatch = useDispatch()
    const [fieldFrom, setFieldFrom] = useState({ email: "", password: "" })

    const { email, password } = fieldFrom
    const handleSubmit = () => {
        let email = "ashu@gmail.com";
        let password = "12345";
        if (fieldFrom.email == email && fieldFrom.password == password) {

            dispatch(setLogin(true))
        }


    }

    return (
        <>
            <View>
                <Text style={[styles.colors]}>
                    Welocome To Login Page
                </Text>

            </View>
            <View style={[styles.container]}>

                <SafeAreaView>
                    <Form onButtonPress={handleSubmit}>
                        <FormItem
                            label="Email"
                            onChangeText={(e) => setFieldFrom((prevState) => ({ ...prevState, ['email']: e }))}
                          
                        />
                        <FormItem
                            label="Password"
                            onChangeText={(e) => setFieldFrom((prevState) => ({ ...prevState, ['password']: e }))}
                         
                        />
                       
                    </Form>
                </SafeAreaView>
            </View>

        </>
    )
}


export default LoginComponent