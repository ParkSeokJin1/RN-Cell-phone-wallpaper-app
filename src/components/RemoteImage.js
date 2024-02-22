import React from "react";
import { Image as RNImage } from "react-native";

const RemoteImage = ({ url, width, height, style }) => {
  return (
    <RNImage
      source={{ uri: url }}
      style={[style, { width: width, height: height }]}
    />
  );
};

export default RemoteImage;
