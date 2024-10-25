import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Hr = ({ height = 2 }) => {
  return (
    <Box
      component="hr"
      sx={{
        width: "100%",
        height: `${height} px`,
        backgroundColor: "Background",
      }}
    />
  );
};
Hr.propTypes = {
  height: PropTypes.number,
};

export default Hr;
