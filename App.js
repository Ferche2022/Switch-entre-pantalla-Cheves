import { ActivityIndicator, SafeAreaView, View } from "react-native";
import React, { useState } from "react";

import GameScreen from "./screens/game-screen/index";
import { Header } from "./components/index";
import StartGame from "./screens/start-game/index";
import { styles } from "./styles";
import theme from "./constants/theme";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "open-sans-extrabold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
    "open-sans-italic": require("./assets/fonts/OpenSans-Italic.ttf"),
  });
  const [userNumber, setUserNumber] = useState();

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        {content}
      </View>
    </SafeAreaView>
  );
}