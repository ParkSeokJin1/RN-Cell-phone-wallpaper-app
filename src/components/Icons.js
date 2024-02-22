import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Icon = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
