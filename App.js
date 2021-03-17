import * as React from "react";
import { useFonts } from "expo-font";
import DrawNavigator from "../reviewsapp/routes/drawnavigator";

export default function App() {
  const [loaded] = useFonts({
    redress: require("./assets/font/Redressed-Regular.ttf"),
    lobster: require("./assets/font/Lobster-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  } else {
    return <DrawNavigator  />;
  }
}
