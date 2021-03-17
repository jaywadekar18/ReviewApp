import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
const image = require("../assets/game_bg.png");
export default function About() {
  return (
   
      <View style={styles.container}>
      
        <Text>This App is created by Jay Wadekar</Text>
        <StatusBar style="auto" />
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
