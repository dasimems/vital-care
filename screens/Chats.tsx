import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import LoggedInHeader from "@/components/_general/LoggedInHeader";
import ChatCard from "@/components/_screens/chats/ChatCard";
import { blackColor } from "@/assets/colors";

const Chats = () => {
  return (
    <LoggedInContainer
      header={<LoggedInHeader />}
      contentContainerStyle={{
        gap: 20
      }}
    >
      {new Array(10).fill(0).map((_, index) => (
        <ChatCard
          style={{
            borderTopWidth: index > 0 ? 1 : 0,
            borderColor: blackColor.opacity100
          }}
          key={index}
        />
      ))}
    </LoggedInContainer>
  );
};

export default Chats;

const styles = StyleSheet.create({});
