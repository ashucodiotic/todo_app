import React ,{useState} from 'react'
import {
    // Alert,
    AppRegistry,
    Button,
    // Platform,
    StyleSheet,
    Text,
    View,
    FlatList
  } from 'react-native';

import AzureAuth from 'react-native-azure-auth';
// import Client from 'react-native-azure-auth/src/networking';


const CLIENT_ID = '7e480753-552b-4a91-b486-9165436af5d1' // replace the string with YOUR client ID
const azureAuth = new AzureAuth({
    clientId:CLIENT_ID
});
export const AuthComponent =  () => {
    console.log("heree")

const [login, setLogin] = useState({ accessToken: null, user: '' , mails: [], userId: ''})
console.log("🚀 ~ file: AuthComponent.js:25 ~ AuthComponent ~ login", login)

    _onLogin = async ()=>{
        try {
            let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read Mail.Read' })
            console.log(tokens,"tokens")
           setLogin({ accessToken: tokens.accessToken });
            let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: '/me'})
            console.log(info,"info")
           setLogin({ user: info.displayName, userId: tokens.userId })
          } catch (error) {
            console.log(error,"error")
          }

    }

    _onGetMails = async () => {
        try {
          let tokens = await azureAuth.auth.acquireTokenSilent({scope: 'Mail.Read', userId: login.userId})
          console.log('Silent:', tokens)
          if (!tokens) {
            tokens = await azureAuth.webAuth.authorize({scope: 'Mail.Read'})
            console.log('NewWeb:', tokens)
          }
          console.log('TOK>>>', tokens.accessToken)
          let mails = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: '/me/mailFolders/Inbox/messages'})
          let mailArr = []
          mails.value.forEach(element => {
            mailArr.push({subject: element.subject})
          });
          if (mailArr.length === 0) {
            mailArr.push({subject: 'No mails found'})
          }
          console.log('Mails: ' + mailArr.length)
         setLogin({mails: mailArr})
        } catch (error) {
          console.log(error)
        }
      }
    
     _onLogout = () => {
        azureAuth.webAuth
          .clearSession()
          .then(success => {
           setLogin({ accessToken: null, user: null });
          })
          .catch(error => console.log(error));
      };
      let loggedIn =login.accessToken  ? true : false;
    return (
        <View style={styles.container}>
        <View>
          <Text style={styles.header}>Azure Auth - Login</Text>
          <Text style={styles.text}>Hello {login.user}!</Text>
           <Text style={styles.text}>
            You are {loggedIn ? '' : 'not '}logged in.
          </Text> 
        </View>  
         <View style={styles.buttons}>
          <Button
            style={styles.button}
            onPress={loggedIn ? _onLogout : _onLogin}
            title={loggedIn ? 'Log Out' : 'Log In'}
          />
          <Button
            style={styles.button}
            onPress={_onGetMails}
            disabled={!loggedIn}
            title={'Get E-Mails'}
          />
        </View>
        <FlatList style={styles.list}
          data={login.mails}
          renderItem={({item}) => <Text style={{padding: 10}}>{item.subject}</Text>}
          keyExtractor={(item, index) => `key-${index}`}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF'
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    text: {
      textAlign: 'center'
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'baseline',
      padding: 20
    },
    button: {
      flex: 1,
      padding:20,
      margin:20
    },
    list: {
      flex: 5,
      margin:20
    }
  });

  // AppRegistry.registerComponent('AuthComponent', () => AuthComponent);
// export default AuthComponent