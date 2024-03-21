import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import MedicationCard from "@/components/_screens/patient-details/MedicationCard";
import { blackColor, orangeColor, primaryColor } from "@/assets/colors";
import TextComponent from "@/components/_general/TextComponent";
import { Calendar, Clock } from "iconsax-react-native";
import { generalIconProps } from "@/utils/_variables";
import { Poppins } from "@/assets/fonts";
import { whiteColor } from "../assets/colors";
import { Check } from "lucide-react-native";

const MedicationDaysDetails: React.FC<{
  date: string;
  morning?: boolean;
  afternoon?: boolean;
  night?: boolean;
}> = ({ date, morning, afternoon, night }) => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderColor: blackColor.opacity100
        }}
      >
        <Calendar {...generalIconProps} />
        <TextComponent fontFamily={Poppins.semiBold.default}>
          {date}
        </TextComponent>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingVertical: 10,
          justifyContent: "space-between"
        }}
      >
        <TextComponent
          style={{
            opacity: 0.6
          }}
        >
          Morning
        </TextComponent>

        {morning ? (
          <Check {...generalIconProps} color={primaryColor.default} />
        ) : (
          <Clock {...generalIconProps} color={orangeColor.default} />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingVertical: 10,
          justifyContent: "space-between"
        }}
      >
        <TextComponent
          style={{
            opacity: 0.6
          }}
        >
          Night
        </TextComponent>

        {night ? (
          <Check {...generalIconProps} color={primaryColor.default} />
        ) : (
          <Clock {...generalIconProps} color={orangeColor.default} />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingVertical: 10,
          justifyContent: "space-between"
        }}
      >
        <TextComponent
          style={{
            opacity: 0.6
          }}
        >
          Afternoon
        </TextComponent>

        {afternoon ? (
          <Check {...generalIconProps} color={primaryColor.default} />
        ) : (
          <Clock {...generalIconProps} color={orangeColor.default} />
        )}
      </View>
    </View>
  );
};

const MedicationDetails = () => {
  return (
    <LoggedInContainer
      hideNav
      contentContainerStyle={{
        gap: 20
      }}
    >
      <MedicationCard
        rightContent={
          <View
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: primaryColor.default,
              borderRadius: 5
            }}
          >
            <TextComponent color={whiteColor.default} fontSize={12}>
              3 days
            </TextComponent>
          </View>
        }
        name="Paracetamol"
        morning={2}
        afternoon={0}
        night={2}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          justifyContent: "center"
        }}
      >
        <TextComponent
          style={{
            opacity: 0.6
          }}
        >
          Status
        </TextComponent>
        <TextComponent color={orangeColor.default}>Ongoing</TextComponent>
      </View>
      <MedicationDaysDetails date="March 12, Monday 2024" morning night />
      <MedicationDaysDetails date="March 13, Tuesday 2024" morning night />
    </LoggedInContainer>
  );
};

export default MedicationDetails;

const styles = StyleSheet.create({});
