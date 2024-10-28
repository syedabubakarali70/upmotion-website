import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import Upmotion from "../icons/Upmotion";
import Navbar from "./Navbar";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { StaggerParent } from "../animations";

const ContactUs = () => {
  return <Button variant="contained">Contact us</Button>;
};

const Header = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <header>
      <Stack
        sx={{ paddingBlock: 2 }}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack flexDirection="row" gap={1} alignItems={"center"}>
          <Upmotion color={theme.palette.logo.main} width={140} height={40} />
        </Stack>
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
          <ContactUs />
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
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Stack>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Stack
          p={2}
          justifyContent="space-between"
          sx={{ height: "100%", width: "33vw", minWidth: "250px" }}
          pt={8}
        >
          <StaggerParent staggerDirection={-1}>
            <Stack gap={2}>
              <Navbar />
            </Stack>
          </StaggerParent>
          <ContactUs />
        </Stack>
      </Drawer>
    </header>
  );
};

export default Header;
