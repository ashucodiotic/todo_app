import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import TabNavibarComponent from './TabNavibarComponent'

const styles = StyleSheet.create({
    colors: {
        // color: "blue",
        // backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 40
    },
})
const ProfileComponent = ({ navigation }) => {
    return (
<>
<TabNavibarComponent />
        <View>

            <Text style={[styles.colors]}>
                profile

            </Text>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('About')}
            />
        </View>
        </>
    )
}

export default ProfileComponent