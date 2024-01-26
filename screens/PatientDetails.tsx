import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import {
  ScreenNames,
  gap,
  generalIconProps,
  widthFull,
  widthHalf
} from "@/utils/_variables";
import DashboardStatTwo from "@/components/_screens/dashboard/DashboardStatTwo";
import {
  ActivityIcon,
  HeartPulseIcon,
  PillIcon,
  ThermometerIcon
} from "lucide-react-native";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import { blackColor, primaryColor } from "@/assets/colors";
import MedicationCard from "@/components/_screens/patient-details/MedicationCard";
import Image from "@/components/_general/Image";
import { AvatarImage } from "@/assets/images";
import { Message } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "@/components/_general/Button";
import { whiteColor } from "../assets/colors";

const PatientDetails = () => {
  const { navigate } = useNavigation();
  return (
    <LoggedInContainer
      hideHeaderText
      hideNav
      contentContainerStyle={{
        gap: 20
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "stretch",
          gap: 20
        }}
      >
        <Image
          image={AvatarImage}
          innerPadding={1}
          width={70}
          height={70}
          style={{
            backgroundColor: primaryColor.default
          }}
        />
        <View
          style={{
            gap: 10,
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <View
            style={{
              gap: 3
            }}
          >
            <TextComponent fontFamily={Poppins.semiBold.default}>
              Oluwaseyi Timilehin
            </TextComponent>
            <TextComponent fontSize={12} color={blackColor.opacity600}>
              3rd January 1992
            </TextComponent>
          </View>
          <View
            style={{
              gap: 5,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <PillIcon {...generalIconProps} color={primaryColor.default} />
            <TextComponent>3</TextComponent>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigate(ScreenNames.ChatDetails.name as never);
          }}
          style={{
            alignSelf: "center"
          }}
        >
          <Message {...generalIconProps} size={30} />
        </TouchableOpacity>
      </View>
      <Button
        type="primary"
        style={{
          alignItems: "center"
        }}
      >
        <TextComponent textAlign="center" color={whiteColor.default}>
          Book Appointment
        </TextComponent>
      </Button>
      <View
        style={{
          gap,
          flexDirection: "row",
          alignItems: "stretch",
          flexWrap: "wrap"
        }}
      >
        <DashboardStatTwo
          style={{
            width: widthHalf
          }}
          title="Temperature"
          icon={<ThermometerIcon {...generalIconProps} />}
        >
          <TextComponent fontFamily={Poppins.semiBold.default} fontSize={25}>
            26.4°C
          </TextComponent>
        </DashboardStatTwo>
        <DashboardStatTwo
          style={{
            width: widthHalf
          }}
          title="Pulse"
          icon={<ActivityIcon {...generalIconProps} />}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 3
            }}
          >
            <TextComponent fontFamily={Poppins.semiBold.default} fontSize={25}>
              56
            </TextComponent>
            <TextComponent>bpm</TextComponent>
          </View>
        </DashboardStatTwo>
        <DashboardStatTwo
          style={{
            width: widthFull
          }}
          title="Blood Pressure"
          icon={<HeartPulseIcon {...generalIconProps} />}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3
            }}
          >
            <View
              style={{
                gap: 3,
                alignItems: "center"
              }}
            >
              <TextComponent color={blackColor.opacity600}>Top</TextComponent>
              <TextComponent
                fontFamily={Poppins.semiBold.default}
                fontSize={25}
              >
                120
              </TextComponent>
            </View>
            <View
              style={{
                gap: 3,
                alignItems: "center"
              }}
            >
              <TextComponent color={blackColor.opacity600}>
                Bottom
              </TextComponent>
              <TextComponent
                fontFamily={Poppins.semiBold.default}
                fontSize={25}
              >
                70
              </TextComponent>
            </View>
          </View>
        </DashboardStatTwo>
      </View>
      <View
        style={{
          gap: 20
        }}
      >
        <TextComponent fontFamily={Poppins.semiBold.default}>
          Medications
        </TextComponent>
        {new Array(3).fill(0).map((_, index) => (
          <MedicationCard
            key={index}
            name="Paracetamol"
            morning={2}
            afternoon={0}
            night={2}
          />
        ))}
      </View>
    </LoggedInContainer>
  );
};

export default PatientDetails;

const styles = StyleSheet.create({});
