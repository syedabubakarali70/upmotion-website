import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Underline } from "../animations";
import PropTypes from "prop-types";
import { fadeDownVariants } from "../animations/variants";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const Navbar = ({ closeDrawer }) => {
  return (
    <>
      {links.map(link => (
        <NavLinkComponent
          key={link.name}
          name={link.name}
          path={link.path}
          closeDrawer={closeDrawer}
        />
      ))}
    </>
  );
};
Navbar.propTypes = {
  closeDrawer: PropTypes.func,
};

const NavLinkComponent = ({ name, path, closeDrawer }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink to={path} onClick={closeDrawer}>
      {({ isActive }) => (
        <motion.div
          variants={fadeDownVariants}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{
            // position: "relative",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <Typography color="var(--palette-text-primary)" mb="2px">
            {name}
          </Typography>
          {/* {isActive && (
            <motion.div
              style={{
                // position: "absolute",
                // bottom: 0,
                // left: 0,
                // right: 0,
                backgroundColor: "var(--palette-text-primary)",
                height: "2px",
                width: "100%",
              }}
              transition={{ type: "spring", bounce: 0.2 }}
              layout="size"
              layoutId="underline"
            ></motion.div>
          )} */}
          {/* {!isActive && isHovered && ( */}
          <Underline
            initial="initial"
            animate={isActive ? "animate" : isHovered ? "animate" : "initial"}
            style={{
              // position: "absolute",
              // bottom: 0,
              // left: 0,
              height: "2px",
              backgroundColor: "var(--palette-text-secondary)",
            }}
            duration={0.2}
            extraAnimationProps={{ ease: "easeInOut" }}
          ></Underline>
          {/* )} */}
        </motion.div>
      )}
    </NavLink>
  );
};
NavLinkComponent.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  closeDrawer: PropTypes.func,
};

export default Navbar;
