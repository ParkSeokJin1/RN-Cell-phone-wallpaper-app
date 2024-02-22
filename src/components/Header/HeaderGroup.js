import React from "react";
import { View } from "react-native";

const HeaderGroup = ({ children }) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginRight: 230 }}
    >
      {children}
    </View>
  );
};

export default HeaderGroup;
