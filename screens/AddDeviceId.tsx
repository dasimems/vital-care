import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import InputField from "@/components/_general/form/InputField";
import Button from "@/components/_general/Button";
import TextComponent from "@/components/_general/TextComponent";
import { blackColor, whiteColor } from "../assets/colors";

const AddDeviceId = () => {
  return (
    <LoggedInContainer
      hideNav
      contentContainerStyle={{
        gap: 20
      }}
    >
      <InputField placeholder="Device Id" />

      <Button
        type="primary"
        style={{
          alignItems: "center"
        }}
      >
        <TextComponent color={whiteColor.default}>Add ID</TextComponent>
      </Button>
    </LoggedInContainer>
  );
};

export default AddDeviceId;

const styles = StyleSheet.create({});
