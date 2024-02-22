import React from "react";
import Button from "../Button";
import Icon from "../Icons";

const HeaderIcon = ({ onPress, iconName }) => {
  return (
    <Button onPress={onPress}>
      <Icon name={iconName} size={28} color="black" />
    </Button>
  );
};

export default HeaderIcon;
