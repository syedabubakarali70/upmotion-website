import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Container from "./components/common/Container";
import theme from "./components/common/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
