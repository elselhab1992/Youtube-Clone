/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#fff",
    secondary: "#fc1503",
    black: "#000",
    grey: "#363535",
  },
  fontSize: {
    small: "18px",
    normal: "20px",
    medium: "25px",
    large: "40px",
    xl: "60px",
  },
  fontWeight: {
    light: "300",
    Regular: "400",
    medium: "500",
    extraBold: "800",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
