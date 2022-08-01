import { createTheme } from "@mui/material";
import { cyan, teal } from "@mui/material/colors";


export const DarkTheme = createTheme({
  palette: {
    primary:{
      main: cyan[700],
      dark: cyan[800],
      light: cyan[500],
      contrastText: "#fff",
    },
    secondary:{
      main: teal[700],
      dark: teal[800],
      light: teal[500],
      contrastText: "#fff",
    },
    background: {
      default: "#303134",
      paper: "#202124",
    }
  }
})
