import { StyleSheet, Text } from "react-native";
import React from "react";
import { textColor } from "@/assets/colors";
import { TextComponentType } from "@/utils/types";
import { Poppins } from "@/assets/fonts";

const TextComponent: React.FC<TextComponentType> = ({
  children,
  fontSize = 15,
  color = textColor.light.default,
  fontFamily = Poppins.regular.default,
  textAlign = "left",
  style,
  ...props
}) => {
  return (
    <Text
      style={{
        color: color as string,
        fontSize,
        fontFamily,
        textAlign,
        ...style
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});
