import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetail from "../screens/ReviewDetail";
import Header from "../shared/Header";



const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        height: 120,
        backgroundColor:'#87D1FC' 

      },
    
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header title="Review App" navigation={navigation} />
          ),
        };
      }}
    />
    <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
  </Stack.Navigator>
);
