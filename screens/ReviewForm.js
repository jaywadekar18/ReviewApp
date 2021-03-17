import React from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  ImageBackground,
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addreview }) {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'white'}}>
      
        <Text style={styles.heading}>Add a review</Text>
      </View>

      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addreview(values);
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              onBlur={props.handleBlur("title")}
              value={props.values.title}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={styles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <Text style={styles.label}>Body</Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Review details"
              onChangeText={props.handleChange("body")}
              onBlur={props.handleBlur("body")}
              value={props.values.body}
            />
            <Text style={styles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <Text style={styles.label}>Rating</Text>
            <TextInput
              style={styles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={props.handleChange("rating")}
              onBlur={props.handleBlur("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Text style={styles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <Button title="Submit" color='#09A2FB' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  errorText: {
    color: "gray",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
  },
  heading: {
    fontSize: 32,
    alignSelf: "center",
    marginVertical: 20,
    fontFamily: "lobster",
    color:'#09A2FB'
  },
});
