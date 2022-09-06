import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth  } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Confirm from './src/screens/Confirm';




Amplify.configure(awsconfig)


const App = () => {

async function signOut(){
  try {
    await Auth.signOut()
  } catch (error) {
    console.log(error)
  }
}

  return (
    <View style={styles.container}>
      <Confirm/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App