import { Dimensions } from "react-native";
import { ImageDimensionType, ScreenNamesType } from "./types";
import {
  Briefcase,
  Home2,
  IconProps,
  Message,
  UserCirlceAdd
} from "iconsax-react-native";
import { blackColor } from "@/assets/colors";
import { convertObjectToArray } from "./functions";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
export const padding = 20,
  nav = "nav",
  profile = "profile",
  widthFull = windowWidth - padding * 2,
  widthHalf = widthFull * 0.475,
  gap = widthFull * 0.05,
  vibrationLengths = {
    short: 1000,
    medium: 3000,
    long: 5000
  },
  buttonTypes = {
    primary: "primary",
    secondary: "secondary",
    default: "default",
    transparent: "transparent"
  },
  appointmentTypes = {
    pending: "Pending",
    completed: "Attended"
  },
  colorSchemes = {
    dark: "dark",
    light: "light"
  },
  imageDimensions: { round: ImageDimensionType; square: ImageDimensionType } = {
    round: "round",
    square: "square"
  },
  generalIconProps: IconProps = {
    size: 20,
    color: blackColor.default
  },
  ScreenNames: {
    [name: string]: ScreenNamesType;
  } = {
    GettingStarted: {
      name: "GetStarted",
      Icon: undefined,
      label: "Getting Started",
      activeNames: ["GettingStarted"],
      showIn: []
    },
    Login: {
      name: "Login",
      Icon: undefined,
      label: "Login",
      activeNames: ["Login"],
      showIn: []
    },
    Register: {
      name: "Register",
      Icon: undefined,
      label: "Register",
      activeNames: ["Register"],
      showIn: []
    },
    Dashboard: {
      name: "Dashboard",
      Icon: Home2,
      label: "Dashboard",
      activeNames: ["Dashboard"],
      showIn: [nav]
    },
    Patients: {
      name: "Patients",
      Icon: UserCirlceAdd,
      label: "Patients",
      activeNames: ["Patients"],
      showIn: [nav],
      isDoctor: true
    },
    Appointments: {
      name: "Appointments",
      Icon: Briefcase,
      label: "Appointments",
      activeNames: ["Appointments"],
      showIn: [nav],
      patientLabel: "Consultation"
    },
    Chats: {
      name: "Chats",
      Icon: Message,
      label: "Chats",
      activeNames: ["Chats"],
      showIn: [nav]
    },
    ChatDetails: {
      name: "ChatDetails",
      Icon: Message,
      label: "Chat Details",
      activeNames: ["ChatDetails"],
      showIn: []
    },
    PatientDetails: {
      name: "PatientDetails",
      Icon: Message,
      label: "Patient Details",
      activeNames: ["PatientDetails"],
      showIn: []
    },
    AppointmentDetails: {
      name: "AppointmentDetails",
      Icon: Message,
      label: "Appointment Details",
      activeNames: ["AppointmentDetails"],
      showIn: []
    },
    Profile: {
      name: "Profile",
      Icon: Message,
      label: "Profile",
      activeNames: ["Profile"],
      showIn: []
    },
    Records: {
      name: "Records",
      Icon: Message,
      label: "Records",
      activeNames: ["Records"],
      showIn: []
    },
    MedicationDetails: {
      name: "MedicationDetails",
      Icon: Message,
      label: "Medication Details",
      activeNames: ["MedicationDetails"],
      showIn: []
    },
    Complaints: {
      name: "Complaints",
      Icon: Message,
      label: "Complaints",
      activeNames: ["Complaints"],
      showIn: []
    },
    AddDeviceId: {
      name: "AddDeviceId",
      Icon: Message,
      label: "Add Device Id",
      activeNames: ["AddDeviceId"],
      showIn: [profile]
    },
    ViewStat: {
      name: "PatientDetails",
      Icon: Message,
      label: "View Stat",
      activeNames: ["ViewStat"],
      showIn: [profile]
    },
    EditProfile: {
      name: "EditProfile",
      Icon: Message,
      label: "Edit Profile",
      activeNames: ["EditProfile"],
      showIn: [profile]
    },
    ChangePassword: {
      name: "ChangePassword",
      Icon: Message,
      label: "Change Password",
      activeNames: ["ChangePassword"],
      showIn: [profile]
    }
  },
  allScreenNames = convertObjectToArray(ScreenNames),
  navRoutes = allScreenNames.filter((screenName) =>
    screenName.showIn.includes(nav)
  ),
  profileRoutes = allScreenNames.filter((screenName) =>
    screenName.showIn.includes(profile)
  );

export { windowHeight, windowWidth, screenWidth, screenHeight };
