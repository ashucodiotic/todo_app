import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    colors: {
        // color: "blue",
        // backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 40
    },
})
const AboutComponent = ({ navigation }) => {
    return (
        <>
            <View style={{ flxe: 1 }}>

                <Text style={[styles.colors]}>
                    About
                </Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>

        </>
    )
}

export default AboutComponent