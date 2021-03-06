import CustomText from "../custom-text";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
    </View>
  );
};

export default Header;