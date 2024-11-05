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
    name: "Testimonials",
    path: "/testimonials",
  },
];

const Navbar = ({ closeDrawer }) => {
  return (
    <>
      {links.map((link, idx) => (
        <NavLinkComponent
          key={link.name}
          name={link.name}
          path={link.path}
          index={idx}
          closeDrawer={closeDrawer}
        />
      ))}
    </>
  );
};
Navbar.propTypes = {
  closeDrawer: PropTypes.func,
};

const NavLinkComponent = ({ name, path, closeDrawer, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink to={path} onClick={closeDrawer}>
      {({ isActive }) => (
        <motion.div
          variants={fadeDownVariants}
          custom={index}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <Typography color="var(--palette-text-primary)" mb="2px">
            {name}
          </Typography>
          <Underline
            initial="initial"
            animate={isActive ? "animate" : isHovered ? "animate" : "initial"}
            style={{
              height: "2px",
              backgroundColor: "var(--palette-text-secondary)",
            }}
            duration={0.2}
            extraAnimationProps={{ ease: "easeInOut" }}
          ></Underline>
        </motion.div>
      )}
    </NavLink>
  );
};
NavLinkComponent.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  closeDrawer: PropTypes.func,
};

export default Navbar;
