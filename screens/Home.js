import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import React, { useState } from "react";
import Card from "../shared/card";
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
  const [reviews, setreview] = useState([
    {
      title:"Phoenix Mall",
      body :'Truly a shopper’s paradise, Phoenix Marketcity has been touted as the number one destination when it comes to entertainment, dining and shopping in the city. The mall provides its customers the best international brands, offers, contests ',
      rating: 4,
      key:1,
    },
    {
      title: "Clash of Clans(game)",
      body:
        "One of my favorite games ever! I love this game! It is strategic, and I love how the player can upgrade pretty much anything in his/her village and move up in levels. I have been playing this game for a few years, and there is still plenty to upgrade. I love that there is both a Home Village and a Builder Base. ",
      rating: 3,
      key: 2,
    },
    {
      title: "Valorant(game)",
      body:
        "Valorant is one of those Counter Strike type of games but playing a group of preset characters with their unique abilities. I would say Valorant is pretty solid in terms of gunplay and balanced abilities, the abilities are the only new aspect of the game which are mostly about defending, distractions and front assault",
      rating: 5,
      key: 3,
    },
  ]);
  const [modal, setmodal] = useState(false);

  const addreview = (review) => {
    (review.key = Math.random().toString()),
      setreview((prevreview) => {
        return [review, ...prevreview];
      });
    setmodal(false);
  };
  const deleteHandler = (key) => {
    console.log(key);
    setreview((prevreview) => prevreview.filter((person) => person.key != key));
  };
  return (
    <View>
      <Ionicons
        onPress={() => setmodal(true)}
        name="add-circle-outline"
        style={styles.modalAddButton}
        size={36}
        color="gray"
      />
      <Modal visible={modal} animationType="slide">
        <TouchableWithoutFeedback>
          <View>
            <MaterialIcons
              style={styles.modalCancelButton}
              name="cancel"
              size={35}
              color="gray"
              onPress={() => setmodal(false)}
            />
            <ReviewForm addreview={addreview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ReviewDetail", item);
            }}
          >
            <Card>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <MaterialIcons
                  onPress={() => deleteHandler(item.key)}
                  name="delete"
                  size={24}
                  color="gray"
                />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalAddButton: {
    alignSelf: "center",
    padding: 10,
  },
  modalCancelButton: {
    alignSelf: "flex-end",
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },
});
