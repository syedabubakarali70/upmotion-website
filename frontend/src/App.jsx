import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Container from "./components/common/Container";
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
      <Container>
        <main>
          <Outlet context="hero-section" />
          <Partners />
          <Outlet context="rest" />
        </main>
        <ContactUs />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
