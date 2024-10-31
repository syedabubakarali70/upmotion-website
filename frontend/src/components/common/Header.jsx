import { Box, Drawer, IconButton, Stack } from "@mui/material";
import Upmotion from "../icons/Upmotion";
import Navbar from "./Navbar";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { StaggerParent } from "../animations";
import Container from "./Container";
import ContactUsBtn from "./ContactUsBtn";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = e => {
    e.preventDefault();
    navigate("/", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.location.reload();
  };
  return (
    <>
      <Stack
        component="header"
        sx={{
          justifyContent: "center",
          width: "100%",
          backdropFilter: "blur(8px)",
          position: "fixed",
          py: 2,
          top: 0,
          zIndex: 1000,
        }}
      >
        <Container>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Link to="/" onClick={handleLogoClick}>
              <Stack flexDirection="row" alignItems={"center"}>
                <Upmotion width={140} height={40} />
              </Stack>
            </Link>
            <StaggerParent>
              <Stack
                flexDirection="row"
                gap={4}
                sx={{ display: { mobile: "none", laptop: "flex" } }}
              >
                <Navbar />
              </Stack>
            </StaggerParent>
            <Box
              sx={{
                display: {
                  mobile: "none",
                  laptop: "flex",
                },
              }}
            >
              <ContactUsBtn />
            </Box>
            <Box
              sx={{
                display: {
                  mobile: "flex",
                  laptop: "none",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Stack>
        </Container>
      </Stack>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Stack
          p={2}
          justifyContent="space-between"
          sx={{ height: "100%", width: "33vw", minWidth: "250px" }}
          pt={8}
        >
          <StaggerParent staggerDirection={-1}>
            <Stack gap={2}>
              <Navbar closeDrawer={() => setDrawerOpen(false)} />
            </Stack>
          </StaggerParent>
          <ContactUsBtn closeDrawer={() => setDrawerOpen(false)} />
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;
