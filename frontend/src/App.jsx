import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./components/common/theme";
import ContactUs from "./components/common/ContactUs";
import Partners from "./components/common/Partners";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Header />
      <div className="wrapper">
        <Outlet context="hero-section" />
      </div>
      <div className="gradient-section">
        <Partners />
        <Outlet context="rest" />
        <ContactUs />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
