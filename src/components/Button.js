import React from "react";
import { Pressable } from "react-native";

const Button = ({ onPress, hitSlop, children, onPressIn, onPressOut }) => {
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {children}
    </Pressable>
  );
};

export default Button;
