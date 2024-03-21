import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ComplaintCard from "./ComplaintCard";
import { blackColor } from "@/assets/colors";

const ComplaintContent: React.FC<{
  name: string;
  text: string;
  replies?: { name: string; text: string }[];
}> = ({ name, text, replies }) => {
  return (
    <View
      style={{
        gap: 10
      }}
    >
      <ComplaintCard name={name} text={text} />
      <View
        style={{
          paddingLeft: 30,
          gap: 10
        }}
      >
        {replies &&
          replies.map(({ name, text }, index) => (
            <ComplaintCard
              style={{
                backgroundColor: blackColor.opacity20
              }}
              key={index}
              name={name}
              text={text}
            />
          ))}
      </View>
    </View>
  );
};

export default ComplaintContent;

const styles = StyleSheet.create({});
