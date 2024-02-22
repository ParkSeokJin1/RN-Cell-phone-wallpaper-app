import React from "react";
import { View } from "react-native";
import Icon from "./Icons";
import Badge from "./Badge";

const TabIcon = ({ iconName, visibleBadge, iconColor }) => {
  if (visibleBadge) {
    return (
      <View>
        <Badge fontSize={10}>
          <Icon name={iconName} size={20} color={iconColor} />
        </Badge>
      </View>
    );
  }

  return (
    <View>
      <Icon name={iconName} size={20} color={iconColor} />
    </View>
  );
};

export default TabIcon;
