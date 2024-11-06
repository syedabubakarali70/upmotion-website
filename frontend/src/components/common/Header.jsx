import { Box, Drawer, IconButton, Stack } from "@mui/material";
import Upmotion from "../icons/Upmotion";
import Navbar from "./Navbar";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { StaggerParent } from "../animations";
import ContactUsBtn from "./ContactUsBtn";
import { Link, useNavigate } from "react-router-dom";
import PaddingBlock from "./PaddingBlock";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = e => {
    e.preventDefault();
    navigate("/", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          py: "1vh",
          top: 0,
          zIndex: 1000,
          height: "60px",
        }}
      >
        <PaddingBlock paddingBlock={{ mobile: 0, tablet: 0, laptop: 0 }}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Link to="/" onClick={handleLogoClick}>
              <Stack
                flexDirection="row"
                alignItems={"center"}
                width={140}
                // sx={{ visibility: "hidden" }}
              >
                <Upmotion width={140} height={40} />
              </Stack>
            </Link>
            <StaggerParent delayChildren={2.5} staggerDuration={0.2}>
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
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ paddingRight: 0 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Stack>
        </PaddingBlock>
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
