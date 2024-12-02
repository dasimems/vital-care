import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import TextComponent from "@/components/_general/TextComponent";
import {
  gap,
  generalIconProps,
  padding,
  roles,
  widthFull,
  widthHalf,
  windowWidth
} from "@/utils/_variables";
import { Poppins } from "@/assets/fonts";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import LoggedInHeader from "@/components/_general/LoggedInHeader";
import DashboardStat from "@/components/_screens/dashboard/DashboardStat";
import { Calendar2, UserCirlceAdd } from "iconsax-react-native";
import {
  AppointmentImage,
  MedicationImage,
  PatientsImage
} from "@/assets/images";
import DashboardStatTwo from "@/components/_screens/dashboard/DashboardStatTwo";
import {
  ActivityIcon,
  HeartPulseIcon,
  ThermometerIcon
} from "lucide-react-native";
import PatientList from "@/components/_screens/_general/PatientList";
import Button from "@/components/_general/Button";
import InputField from "@/components/_general/form/InputField";
import useUser from "@/hooks/useUser";
import AppointmentCard from "@/components/_screens/_general/AppointmentCard";

const Dashboard = () => {
  const [showStats, setShowStats] = useState(false);
  const { userDetails } = useUser();
  const [showComplaint, setShowComplaint] = useState(false);
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
                Welcome {userDetails?.name}
              </TextComponent>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10
                }}
              >
                <TextComponent color={blackColor.opacity600}>
                  Device Id: {userDetails?.id}
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
          title={
            userDetails?.role === roles.doctor?.toLowerCase()
              ? "Appointments"
              : "Consultations"
          }
          icon={<Calendar2 {...generalIconProps} color={blackColor.default} />}
        />
        {userDetails?.role === roles.doctor?.toLowerCase() && (
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
        )}
        {userDetails?.role === roles.patient?.toLowerCase() && (
          <DashboardStat
            image={MedicationImage}
            style={{
              width: widthHalf
            }}
            stat={0}
            title="Medications"
            backgroundColor={primaryColor.opacity800}
            icon={
              <UserCirlceAdd {...generalIconProps} color={whiteColor.default} />
            }
          />
        )}
        {userDetails?.role === roles.patient.toLowerCase() && (
          <>
            {showStats && (
              <>
                <DashboardStatTwo
                  style={{
                    width: widthHalf
                  }}
                  title="Temperature"
                  icon={<ThermometerIcon {...generalIconProps} />}
                >
                  <TextComponent
                    fontFamily={Poppins.semiBold.default}
                    fontSize={25}
                  >
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
                    <TextComponent
                      fontFamily={Poppins.semiBold.default}
                      fontSize={25}
                    >
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
                      <TextComponent color={blackColor.opacity600}>
                        Top
                      </TextComponent>
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
              </>
            )}
            {!showStats && (
              <Button
                action={() => {
                  setShowStats(true);
                }}
                type="primary"
              >
                <TextComponent textAlign="center" color={whiteColor.default}>
                  Take Readings
                </TextComponent>
              </Button>
            )}
            {showComplaint && (
              <View
                style={{
                  gap: 20
                }}
              >
                <InputField
                  multiline
                  inputStyle={{
                    textAlignVertical: "top",
                    height: 100
                  }}
                  label="Make a complaint"
                  placeholder="type your complaint here...."
                />
                <Button
                  action={() => {
                    setShowComplaint(false);
                  }}
                  type="primary"
                >
                  <TextComponent textAlign="center" color={whiteColor.default}>
                    Submit
                  </TextComponent>
                </Button>
              </View>
            )}
            {!showComplaint && (
              <Button
                action={() => {
                  setShowComplaint(true);
                }}
                type="primary"
              >
                <TextComponent textAlign="center" color={whiteColor.default}>
                  Make a complaint
                </TextComponent>
              </Button>
            )}
          </>
        )}
      </View>

      {userDetails?.role === roles.doctor?.toLowerCase() && (
        <View
          style={{
            gap: 10
          }}
        >
          <TextComponent fontSize={16} fontFamily={Poppins.medium.default}>
            My patients
          </TextComponent>
          <PatientList max={5} />
        </View>
      )}
      {userDetails?.role === roles.patient?.toLowerCase() && (
        // <View
        //   style={{
        //     gap: 10
        //   }}
        // >
        //   <TextComponent fontSize={16} fontFamily={Poppins.medium.default}>
        //     Active consultations
        //   </TextComponent>
        //   <View
        //     style={{
        //       flexDirection: "row",
        //       alignItems: "stretch",
        //       flexWrap: "wrap",
        //       gap
        //     }}
        //   >
        //     {new Array(6).fill(0).map((_, index) => (
        //       <AppointmentCard
        //         style={{
        //           width: widthHalf
        //         }}
        //         key={index}
        //       />
        //     ))}
        //   </View>
        // </View>

        <View style={{ paddingVertical: 40, alignItems: "center" }}>
          <TextComponent
            textAlign="center"
            style={{ maxWidth: windowWidth * 0.7 }}
          >
            You have no active consultations at the moment
          </TextComponent>
        </View>
      )}
    </LoggedInContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
