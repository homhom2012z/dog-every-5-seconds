import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const overrides = {
  ...chakraTheme,
  colors,
  config,
};

const theme = extendTheme(overrides);

export default theme;
