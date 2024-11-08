import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  cssVariables: { cssVarPrefix: "" },
  palette: {
    mode: "dark",
    primary: {
      mainChannel: "20,96,231",
      darkChannel: "9,28, 56",
      lightChannel: "240,245,252",
      main: "rgb(var(--palette-primary-mainChannel))",
      light: "rgb(var(--palette-primary-lightChannel))",
      dark: "rgb(var(--palette-primary-darkChannel))",
    },
    background: {
      default: "#000",
    },
    green: {
      mainChannel: " 0,170,78",
      main: "rgb(var(--palette-green-mainChannel))",
    },
    coral: {
      mainChannel: " 255,101,90",
      main: "rgb(var(--palette-coral-mainChannel))",
    },
    gold: {
      mainChannel: " 240,188,78",
      main: "rgb(var(--palette-gold-mainChannel))",
    },
    logo: { main: "var(--palette-primary-main)" },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  typography: {
    h1: {
      fontFamily: "'AGaramond LT', serif",
    },
    h2: {
      fontFamily: "'AGaramond LT', serif",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "'AGaramond LT', serif",
    },
    h4: {
      fontFamily: "'AGaramond LT', serif",
    },
    h5: {
      fontFamily: "'AGaramond LT', serif",
    },
    h6: {
      fontFamily: "'AGaramond LT', serif",
    },
    allVariants: {
      fontFamily: "'Poppins-Medium', 'Poppins-Semibold', sans-serif",
    },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "1px solid rgba(255, 255, 255, 0.479)",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f0f0f00",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          backgroundColor: "var(--palette-background-default)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "var(-palette-text-primary)",
          padding: "10px 20px",
          borderRadius: "999px",
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          color: "#fff",
          backgroundColor: "rgba(var(--palette-primary-mainChannel), 0.9)",
          "&:hover": {
            backgroundColor: "rgb(var(--palette-primary-mainChannel))",
            boxShadow:
              "0 0.75rem 1.5rem rgba(var(--palette-primary-mainChannel), 0.5)",
          },
          ":focus": {
            boxShadow:
              "0 0 0 3px rgba(var(--palette-primary-mainChannel), 0.4)",
          },
        },
        outlined: {
          borderColor: "var(--palette-primary-main)",
          color: "var(--palette-primary-main)",
          "&:hover": {
            borderColor: "rgba(var(--palette-primary-mainChannel),0.3)",
            backgroundColor: "rgba(var(--palette-primary-mainChannel),0.1)", // slight background on hover
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
