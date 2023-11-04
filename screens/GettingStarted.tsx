import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "@/components/_layouts/Container";
import { primaryColor, whiteColor } from "@/assets/colors";
import { windowWidth } from "@/utils/_variables";

const GettingStarted = () => {
  return (
    <Container>
      <View
        style={{
          flex: 1 / 2,
          backgroundColor: primaryColor.default,
          borderBottomLeftRadius: windowWidth * 0.3,
          padding: 10
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: whiteColor.default,
            borderRadius: windowWidth * 0.1,
            borderBottomLeftRadius: windowWidth * 0.3
          }}
        ></View>
      </View>
    </Container>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({});
