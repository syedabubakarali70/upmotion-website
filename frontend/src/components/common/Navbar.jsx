import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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
    name: "Partners",
    path: "/partners",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
];

const navVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    // transition: {
    //   type: "tween",
    //   ease: "easeInOut",
    // },
  },
};

const underlineVariants = {
  initial: {
    width: "0%",
  },
  hover: {
    width: "100%", // Target width on hover
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const Navbar = () => {
  return (
    <>
      {links.map(link => (
        <NavLinkComponent key={link.name} name={link.name} path={link.path} />
      ))}
    </>
  );
};

import PropTypes from "prop-types";

const NavLinkComponent = ({ name, path }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <motion.div
          variants={navVariant}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <Typography color="var(--palette-text-primary)">{name}</Typography>
          <motion.div
            variants={underlineVariants}
            initial={isActive ? "hover" : "initial"}
            animate={!isActive && (isHovered ? "hover" : "initial")} // Control animation based on hover state?
            style={{
              position: "absolute",
              // width:isActive && '100%',
              bottom: 0,
              left: 0,
              height: "2px",
              backgroundColor: "var(--palette-text-primary)",
            }}
          />
        </motion.div>
      )}
    </NavLink>
  );
};
NavLinkComponent.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Navbar;
