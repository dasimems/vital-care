import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import ComplaintContent from "@/components/_screens/complaints/ComplaintContent";

const replies = [
  { name: "Atunise Emmanuel", text: "Take pracetamol" },
  { name: "Atunise Emmanuel", text: "Take pracetamol" },
  { name: "Atunise Emmanuel", text: "Take pracetamol" }
];

const Complaints = () => {
  return (
    <LoggedInContainer
      hideNav
      contentContainerStyle={{
        gap: 20
      }}
    >
      {new Array(6).fill(0).map((_, index) => (
        <ComplaintContent
          key={index}
          name="David monomore"
          text="I can't sleep for days"
          replies={index % 3 === 1 ? replies : undefined}
        />
      ))}
    </LoggedInContainer>
  );
};

export default Complaints;

const styles = StyleSheet.create({});
