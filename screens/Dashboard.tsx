import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import TextComponent from "@/components/_general/TextComponent";
import {
  gap,
  generalIconProps,
  padding,
  widthFull,
  widthHalf,
  windowWidth
} from "@/utils/_variables";
import { Poppins } from "@/assets/fonts";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import LoggedInHeader from "@/components/_general/LoggedInHeader";
import DashboardStat from "@/components/_screens/dashboard/DashboardStat";
import { Calendar2, UserCirlceAdd } from "iconsax-react-native";
import { AppointmentImage, PatientsImage } from "@/assets/images";
import DashboardStatTwo from "@/components/_screens/dashboard/DashboardStatTwo";
import {
  ActivityIcon,
  HeartPulseIcon,
  ThermometerIcon
} from "lucide-react-native";
import PatientList from "@/components/_screens/_general/PatientList";

const Dashboard = () => {
  return (
    <LoggedInContainer
      header={
        <LoggedInHeader
          style={{
            borderBottomWidth: 0
          }}
          headerContent={
            <View
              style={{
                gap: 5
              }}
            >
              <TextComponent
                fontSize={20}
                fontFamily={Poppins.semiBold.default}
              >
                Welcome David
              </TextComponent>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10
                }}
              >
                <TextComponent color={blackColor.opacity600}>
                  Device Id: 1WE2TI56
                </TextComponent>
                {/* <TouchableOpacity
            style={{
              paddingVertical: 5,
              backgroundColor: blackColor.opacity50,
              borderRadius: 10,
              paddingHorizontal: 10
            }}
          >
            <TextComponent color={blackColor.opacity600}>
              Connect Device
            </TextComponent>
          </TouchableOpacity> */}
              </View>
            </View>
          }
        />
      }
      contentContainerStyle={{
        gap: 20
      }}
    >
      <View
        style={{
          gap,
          flexDirection: "row",
          alignItems: "stretch",
          flexWrap: "wrap"
        }}
      >
        <DashboardStat
          image={AppointmentImage}
          style={{
            width: widthHalf
          }}
          stat={0}
          backgroundColor={"#FED7B2"}
          color={blackColor.default}
          title="Appointments"
          icon={<Calendar2 {...generalIconProps} color={blackColor.default} />}
        />
        <DashboardStat
          image={PatientsImage}
          style={{
            width: widthHalf
          }}
          stat={0}
          title="Patients"
          backgroundColor={primaryColor.opacity800}
          icon={
            <UserCirlceAdd {...generalIconProps} color={whiteColor.default} />
          }
        />
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
      <PatientList max={5} />
    </LoggedInContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
