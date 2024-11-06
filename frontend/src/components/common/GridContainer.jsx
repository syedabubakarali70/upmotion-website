import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";
const GridContainer = ({
  children,
  mobile = 1,
  tablet = 2,
  laptop = 3,
  desktop = 3,
}) => {
  return (
    <Grid
      columns={{ mobile, tablet, laptop, desktop }}
      container
      spacing={3}
      sx={{ overflowX: "hidden", scrollbarWidth: "none" }}
    >
      {children}
    </Grid>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  mobile: PropTypes.number,
  tablet: PropTypes.number,
  laptop: PropTypes.number,
  desktop: PropTypes.number,
};

export default GridContainer;
