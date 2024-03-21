import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import React from "react";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import { blackColor } from "@/assets/colors";
import { primaryColor } from "../../../assets/colors";

const ComplaintCard: React.FC<{
  name: string;
  text: string;
  style?: ViewStyle;
}> = ({ name, text, style }) => {
  return (
    <View
      style={{
        gap: 4,
        backgroundColor: blackColor.opacity100,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        ...style
      }}
    >
      <TextComponent fontFamily={Poppins.semiBold.default}>
        {name}
      </TextComponent>
      <TextComponent
        style={{
          opacity: 0.6
        }}
      >
        {text}
      </TextComponent>

      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: 10,
          justifyContent: "flex-start"
        }}
      >
        <TextComponent fontSize={11} style={{ opacity: 0.6 }}>
          13-12-2024
        </TextComponent>
        <TouchableOpacity>
          <TextComponent color={primaryColor.default}>Reply</TextComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ComplaintCard;

const styles = StyleSheet.create({});
