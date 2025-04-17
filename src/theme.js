// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    typography: {
      fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,
    },
    primary: {
      main: "#73BF74", // your primary color
    },
    secondary: {
      main: "#A9DAA9", // your secondary color
    },
  },
});

export default theme;
