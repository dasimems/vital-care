import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextComponent from "@/components/_general/TextComponent";
import { blackColor, primaryColor } from "../../../assets/colors";

const ChatDetailsCard: React.FC<{ isSender?: boolean }> = ({ isSender }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: isSender ? "flex-end" : "flex-start"
      }}
    >
      <View
        style={{
          maxWidth: "80%",
          padding: 10,
          backgroundColor: isSender
            ? primaryColor.opacity200
            : blackColor.opacity50,
          borderRadius: 15,
          borderBottomLeftRadius: isSender ? 15 : 0,
          borderBottomRightRadius: isSender ? 0 : 15
        }}
      >
        <TextComponent>this is just a dummy message</TextComponent>
        <TextComponent color={blackColor.opacity600} fontSize={13}>
          8:40 pm
        </TextComponent>
      </View>
    </View>
  );
};

export default ChatDetailsCard;

const styles = StyleSheet.create({});
