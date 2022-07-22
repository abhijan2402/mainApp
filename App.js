import React from 'react';
import {
  SafeAreaView,
  // ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const App = () => {

  return (
    <>
      <View style={styles.mains}>
        <ImageBackground source={require('./Assests/Courses2.jpg')} style={styles.JAVA}>
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={styles.main}>
          <ImageBackground source={require('./Assests/cpp1.png')} style={styles.JAVA}>
          </ImageBackground>
        </View>
        <View style={styles.main}>
          <ImageBackground source={require('./Assests/ReactJs.png')} style={styles.JAVA}>
          </ImageBackground>
        </View>
        <View style={styles.main}>
          <ImageBackground source={require('./Assests/JAVA.png')} style={styles.JAVA}>
          </ImageBackground>
        </View>
        <View style={styles.main}>
          <ImageBackground source={require('./Assests/python.png')} style={styles.JAVA}>
          </ImageBackground>
        </View>
        <View style={styles.main}>
          <ImageBackground source={require('./Assests/git.png')} style={styles.JAVA}>
          </ImageBackground>
        </View>
        <View style={styles.main}>
          <ImageBackground source={require('./Assests/React-native.png')} style={styles.JAVA}>
          </ImageBackground>
        </View>
      </ScrollView>
    </>

  );
};

const styles = StyleSheet.create({
  mains: {
    textAlign: 'center',
    fontSize: 20,
    borderBottomWidth: 3,
    height: windowHeight / 4,
    marginVertical: 0,
    marginBottom: 5,
    shadowColor: 'black',
    backgroundColor: 'skyBlue',
  },
  main: {
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 3,
    borderColor: 'darkgrey',
    height: windowHeight / 5,
    marginHorizontal: 35,
    borderRadius: 5,
    marginVertical: 6,
    elevation: 15,
    shadowColor: 'black',
    shadowOffset: 10

  },
  main1: {
    fontSize: 40
  },
  JAVA: {
    height: windowHeight / 5.2
  }
});

export default App;
