import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardcontent}>
        {props.children}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: { 
      borderRadius:6,
      elevation:5,
      backgroundColor: '#E8EFF3',
      shadowOffset: {width:1 ,height:1},
      shadowColor:'#fff',
      shadowOpacity : 0.3,
      shadowRadius:2,
      marginHorizontal:10,
      marginVertical:10
  },
  cardcontent: { 
      marginVertical:18,
      marginHorizontal:10,
      
  },
});
