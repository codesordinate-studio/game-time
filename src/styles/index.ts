import { dynamicStyles } from "./dynamic";
import { staticStyles } from "./utils";

const styles = {
  ...staticStyles,
  ...dynamicStyles,
};

export default styles;
export { scaler } from "./config.styles";
export * from "./dynamic";
export * from "./utils";
