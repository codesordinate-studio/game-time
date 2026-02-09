import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const scaler = {
  width: (size: number) => (size / 100) * width,
  height: (size: number) => (size / 100) * height,
  deviceHeight: height,
  deviceWidth: width,
};
