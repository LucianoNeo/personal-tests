import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Confirm from './src/screens/Confirm';
import Forgot from './src/screens/Forgot';
import Reset from './src/screens/Reset';
import Navigation from './src/navigation';




Amplify.configure(awsconfig)


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});


export default App