import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PatientCard from "./PatientCard";

const PatientList: React.FC<{ max?: number }> = ({ max }) => {
  return (
    <View
      style={{
        gap: 20
      }}
    >
      {new Array(20)
        .fill(0)
        .slice(0, max)
        .map((_, index) => (
          <PatientCard key={index} />
        ))}
    </View>
  );
};

export default PatientList;

const styles = StyleSheet.create({});
