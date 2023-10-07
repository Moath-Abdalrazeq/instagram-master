import React, { createContext, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#ff8500",
    },
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: "#333", // Set the desired background color for the Card component
      },
    },
  },
});

// Create a context for the theme
const ThemeContext = createContext(theme);

// Create a custom hook to access the theme
export function useTheme() {
  return useContext(ThemeContext);
}

// Create a ThemeProvider component to wrap your entire app
export function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
