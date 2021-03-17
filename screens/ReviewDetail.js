import { StatusBar } from "expo-status-bar";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { images } from "../shared/global";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../shared/card";

export default function ReviewDetail({ route, navigation }) {
  const { title, body, rating } = route.params;
  return (
    <View>
      <Card>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}> {body}</Text>
        <Text style={styles.rating}>
          Rating- 
          <Image
            style={{ width: rating * 18, height: 20 }}
            source={images.ratings[rating]}
          />
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginBottom:10
  },
  body: {
   textAlign:'justify'
  },  
  rating:{
     marginTop:10,
    fontSize:18
  }

});
