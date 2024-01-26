import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import LoggedInHeader from "@/components/_general/LoggedInHeader";
import InputField from "@/components/_general/form/InputField";
import { SearchIcon } from "lucide-react-native";
import { generalIconProps } from "@/utils/_variables";
import { blackColor } from "@/assets/colors";
import PatientList from "@/components/_screens/_general/PatientList";

const Patients = () => {
  return (
    <LoggedInContainer
      header={<LoggedInHeader />}
      contentContainerStyle={{
        gap: 20
      }}
    >
      <InputField
        placeholder="Search patients..."
        leftIcon={
          <SearchIcon {...generalIconProps} color={blackColor.opacity600} />
        }
        inputStyle={{
          paddingVertical: 10
        }}
      />
      <PatientList />
    </LoggedInContainer>
  );
};

export default Patients;

const styles = StyleSheet.create({});
