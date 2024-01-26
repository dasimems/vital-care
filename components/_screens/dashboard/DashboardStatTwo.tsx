import { ColorValue, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import TextComponent from "@/components/_general/TextComponent";
import { blackColor } from "@/assets/colors";

const DashboardStatTwo: React.FC<{
  style?: ViewStyle;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  backgroundColor?: ColorValue;
  color?: ColorValue;
}> = ({
  style,
  children,
  icon,
  color,
  title,
  backgroundColor = blackColor.opacity50
}) => {
  return (
    <View
      style={{
        gap: 40,
        borderRadius: 15,
        backgroundColor,
        paddingVertical: 15,
        paddingHorizontal: 25,
        ...style
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          justifyContent: "space-between"
        }}
      >
        <TextComponent color={color}>{title}</TextComponent>
        {icon}
      </View>

      <View>{children}</View>
    </View>
  );
};

export default DashboardStatTwo;

const styles = StyleSheet.create({});
