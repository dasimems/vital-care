import { Dimensions } from "react-native";
import { ImageDimensionType, ScreenNamesType } from "./types";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
export const padding = 20,
  nav = "nav",
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
  colorSchemes = {
    dark: "dark",
    light: "light"
  },
  imageDimensions: { round: ImageDimensionType; square: ImageDimensionType } = {
    round: "round",
    square: "square"
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
    }
  };

export { windowHeight, windowWidth, screenWidth, screenHeight };
