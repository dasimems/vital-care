import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import LoggedInHeader from "@/components/_general/LoggedInHeader";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import { convertObjectToArray } from "@/utils/functions";
import {
  appointmentTypes,
  gap,
  padding,
  widthHalf,
  windowWidth
} from "@/utils/_variables";
import TextComponent from "@/components/_general/TextComponent";
import AppointmentCard from "@/components/_screens/_general/AppointmentCard";

const Appointments = () => {
  const [activeType, setActiveType] = useState(appointmentTypes.pending);

  return (
    <LoggedInContainer
      header={<LoggedInHeader />}
      contentContainerStyle={{
        gap: 20
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 9000,
          backgroundColor: blackColor.opacity50,
          padding: 5
        }}
      >
        {convertObjectToArray(appointmentTypes).map((type, index) => (
          <TouchableOpacity
            onPress={() => {
              setActiveType(type);
            }}
            style={{
              flex: 1 / 2,
              paddingVertical: 10,
              paddingHorizontal: 15,
              backgroundColor:
                activeType === type ? primaryColor.default : undefined,
              borderRadius: 90000
            }}
            key={index}
          >
            <TextComponent
              color={activeType === type ? whiteColor.default : undefined}
              textAlign="center"
            >
              {type}
            </TextComponent>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap
        }}
      >
        {new Array(6).fill(0).map((_, index) => (
          <AppointmentCard
            style={{
              width: widthHalf
            }}
            key={index}
          />
        ))}
      </View>
    </LoggedInContainer>
  );
};

export default Appointments;

const styles = StyleSheet.create({});
