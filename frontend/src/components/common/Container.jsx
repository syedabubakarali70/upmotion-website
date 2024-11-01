import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        paddingInline: { mobile: 2, tablet: 4, laptop: 8, desktop: 12 },
        maxWidth: "100rem",
        // mx: "auto",
      }}
    >
      {children}
    </Box>
  );
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
