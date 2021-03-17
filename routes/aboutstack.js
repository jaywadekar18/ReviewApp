import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/About'
const Stack = createStackNavigator();
import Header from '../shared/Header'
export const AboutNavigator = () => (
  
    <Stack.Navigator initialRouteName="Home"  screenOptions={{
        headerStyle: {
          backgroundColor: '#87D1FC',
          height:110
        },
       
      }}>
      <Stack.Screen name="About" component={About}  options={({ navigation }) => {
        return { headerTitle: () => <Header title='About Us' navigation={navigation} /> };
      }} />
      
    </Stack.Navigator>
  
);