import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import { blackColor, whiteColor } from "@/assets/colors";
import TextComponent from "@/components/_general/TextComponent";
import Button from "@/components/_general/Button";
import InputField from "@/components/_general/form/InputField";

const ChangePassword = () => {
  return (
    <LoggedInContainer
      hideNav
      contentContainerStyle={{
        gap: 20
      }}
    >
      <InputField
        secureTextEntry
        keyboardType="number-pad"
        inputMode="numeric"
        placeholder="Previous password"
      />
      <InputField
        secureTextEntry
        keyboardType="number-pad"
        inputMode="numeric"
        placeholder="New password"
      />
      <InputField
        secureTextEntry
        keyboardType="number-pad"
        inputMode="numeric"
        placeholder="Repeat new password"
      />

      <Button
        type="primary"
        style={{
          alignItems: "center"
        }}
      >
        <TextComponent color={whiteColor.default}>
          Change password
        </TextComponent>
      </Button>
    </LoggedInContainer>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
