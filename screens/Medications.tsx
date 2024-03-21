import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import Button from "@/components/_general/Button";
import TextComponent from "@/components/_general/TextComponent";
import { blackColor, whiteColor } from "@/assets/colors";
import MedicationCard from "@/components/_screens/patient-details/MedicationCard";
import { MedicationStatusType } from "@/utils/types";

const filters: MedicationStatusType[] = ["Ongoing", "Completed", "Canceled"];

const Medications = () => {
  const [activeFilter, setActiveFilter] = useState<MedicationStatusType>(
    filters[0]
  );
  return (
    <LoggedInContainer
      hideNav
      contentContainerStyle={{
        gap: 20
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          padding: 4,
          borderRadius: 9000,
          backgroundColor: blackColor.opacity100
        }}
      >
        {filters.map((filter) => (
          <Button
            action={() => {
              setActiveFilter(filter);
            }}
            key={filter}
            type={filter === activeFilter ? "primary" : "transparent"}
            style={{
              ...styles.filterButtonStyle
            }}
          >
            <TextComponent
              color={filter === activeFilter ? whiteColor.default : undefined}
            >
              {filter}
            </TextComponent>
          </Button>
        ))}
      </View>

      {new Array(10).fill(0).map((_, index) => (
        <MedicationCard
          status={activeFilter}
          key={index}
          name="Paracetamol"
          morning={2}
          afternoon={0}
          night={2}
        />
      ))}
    </LoggedInContainer>
  );
};

export default Medications;

const styles = StyleSheet.create({
  filterButtonStyle: {
    flex: 1 / filters.length,
    borderRadius: 90000,
    paddingVertical: 7
  }
});
