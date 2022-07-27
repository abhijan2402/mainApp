import React, { useEffect, useRef } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
import CourseDrawer from './src/components/CourseDrawer';
const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();
const Tabs=createBottomTabNavigator()
const App=()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Course" component={CourseDrawer}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;