import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  // const [fetchedMessage, setFetchedMessage] = useState('');

  const authCtx = useContext(AuthContext);
  const token =authCtx.token;
  // useEffect(() => {
  //   axios.get(
  //     'https://console.firebase.google.com/u/0/project/api-project-93a2b/database/api-project-93a2b-default-rtdb/data/~2Fmessage.json?auth='+token
  //   ).then((response) => {
  //     setFetchedMessage(response.data);
  //     window.alert(response.data);
      
  //   });
  // }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      {/* <Text>{fetchedMessage}</Text> */}
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
