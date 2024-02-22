import React, { useMemo } from "react";
import { View } from "react-native";
import Typography from "./Typography";

export const HookTestCompo = ({ a, b }) => {
  const text = useMemo(() => {
    return a + b;
  }, [a, b]);
  return (
    <View>
      <Typography>결과 값: {text}</Typography>
    </View>
  );
};
