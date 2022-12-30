import React from 'react'
import { Button, StyleSheet, View,Text } from 'react-native'
const styles = StyleSheet.create({
  colors: {
      // color: "blue",
      // backgroundColor: 'red',
      textAlign: 'center',
      fontSize: 40

  },
  viewScreen: {
      flex: 1,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',

  }
})
const NotificationsScreen = ( {navigation}) => {
  return (
    <View style={[styles.viewScreen]}>
    <Text style={[styles.colors]}>

        Notification 
    </Text>
    <Button
        title="open navbar"
        onPress={() => navigation.openDrawer()}
    />
   
</View>
  )
}

export default NotificationsScreen