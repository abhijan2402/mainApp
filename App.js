import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {

  return (
    <View style={styles.main}><Text style={styles.main1}>hello</Text></View>

  );
};

const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
    fontSize: 20,
  },
  main1: {
    fontSize: 40
  }
});

export default App;
