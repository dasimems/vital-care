import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import InputField from "@/components/_general/form/InputField";
import Button from "@/components/_general/Button";
import TextComponent from "@/components/_general/TextComponent";
import { blackColor, whiteColor } from "../assets/colors";

const ProfileInformation = () => {
  return (
    <LoggedInContainer
      hideNav
      contentContainerStyle={{
        gap: 20
      }}
    >
      <InputField placeholder="Full name" />
      <InputField
        inputMode="email"
        keyboardType="email-address"
        placeholder="Email"
      />

      <Button
        type="primary"
        style={{
          alignItems: "center"
        }}
      >
        <TextComponent color={whiteColor.default}>Update Profile</TextComponent>
      </Button>
    </LoggedInContainer>
  );
};

export default ProfileInformation;

const styles = StyleSheet.create({});
