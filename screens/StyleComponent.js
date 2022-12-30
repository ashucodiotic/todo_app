import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
    square: {
        height: 30,
        width: 30,
    },
    container: {
        flex: 1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    }
})
const StyleComponent = () => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.square, { backgroundColor: "red" }]}> </Text>
            <Text style={[styles.square, { backgroundColor: "blue" }]}> </Text>
            <Text style={[styles.square, { backgroundColor: "green" }]}> </Text>
            <Text style={[styles.square, { backgroundColor: "yellow" }]}> </Text>
            <Text style={[styles.square, { backgroundColor: "black" }]}> </Text>

        </View>
    )
}

export default StyleComponent