import React from "react";
import headerlogo from "../assets/heart_logo.png";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  return (
    <View source={require("../assets/game_bg.png")} style={styles.Header}>
      <SimpleLineIcons
        name="options"
        size={24}
        color="black"
        onPress={() => {
          navigation.openDrawer();
        }}
        style={styles.Icon}
      />
      <View style={styles.logo}>
        <Image style={{ width: 30, height: 30 }} source={headerlogo} />
        <Text style={styles.HeaderText}>{title}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
  },
  HeaderText: {
    fontSize: 37,
    color: "#34383A",
    fontFamily: "lobster",
  },
  Icon: {
    position: "absolute",
    left: 5,
  },
  logo: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
});
