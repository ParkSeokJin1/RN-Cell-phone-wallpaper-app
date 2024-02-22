import React from "react";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { View, Dimensions, Button } from "react-native";
import Spacer from "./Spacer";
import Icon from "./Icons";
import Typography from "./Typography";

const { width } = Dimensions.get("window");

const HeaderWithoutCompound = ({ leftIcon, title, rightIcon }) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              width: width,
              height: 56,
              flexDirection: "row",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <Spacer horizontal={true} space={12} />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                {leftIcon && (
                  <Button onPress={leftIcon.onPress}>
                    <Icon size={28} iconName={leftIcon.iconName} />
                  </Button>
                )}

                <Typography fontSize={18}>{title}</Typography>
              </View>
              {rightIcon && (
                <Button onPress={rightIcon.onPress}>
                  <Icon iconName={rightIcon.iconName} size={28} />
                </Button>
              )}
            </View>
            <Spacer horizontal={true} space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default HeaderWithoutCompound;
