import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";
import React from "react";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import { primaryColor, whiteColor } from "@/assets/colors";

const DashboardStat: React.FC<{
  backgroundColor?: ColorValue;
  icon: React.ReactNode;
  title: string;
  stat: number;
  color?: ColorValue;
  style?: ViewStyle;
  image: ImageSourcePropType;
}> = ({
  icon,
  title,
  stat = 0,
  backgroundColor = primaryColor.default,
  color = whiteColor.default,
  style,
  image
}) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 15,
        backgroundColor,
        gap: 10,
        flexShrink: 0,
        ...style
      }}
    >
      {icon}
      <TextComponent
        color={color}
        fontSize={18}
        fontFamily={Poppins.semiBold.default}
      >
        {title}
      </TextComponent>
      <TextComponent color={color}>{stat}</TextComponent>
      <View
        style={{
          alignItems: "flex-end",
          height: 150,
          overflow: "hidden"
        }}
      >
        <Image
          source={image}
          style={{
            height: "110%",
            resizeMode: "contain",
            alignSelf: "flex-end",
            alignContent: "flex-end",
            alignItems: "flex-end",
            maxWidth: "100%"
          }}
        />
      </View>
    </View>
  );
};

export default DashboardStat;

const styles = StyleSheet.create({});
