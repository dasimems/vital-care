import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { navRoutes, padding } from "@/utils/_variables";
import { blackColor, whiteColor } from "@/assets/colors";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
        paddingHorizontal: padding,
        backgroundColor: whiteColor.default,
        paddingVertical: 20,
        borderTopColor: blackColor.opacity50,
        borderTopWidth: 1
      }}
    >
      {navRoutes.map((screenName, index) => (
        <NavButton {...screenName} key={index} />
      ))}
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({});
