import React from "react";
import { View } from "react-native";

const Spacer = ({ horizontal, space }) => {
  if (horizontal) {
    return <View style={{ marginLeft: space }}></View>;
  }

  return <View style={{ marginTop: space }}></View>;
};

export default Spacer;
