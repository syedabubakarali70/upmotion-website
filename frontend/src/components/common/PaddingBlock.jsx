import { Box } from "@mui/material";
import PropTypes from "prop-types";
const PaddingBlock = ({
  children,
  paddingBlock = { mobile: 2, tablet: 4, laptop: 6, desktop: 10 },
}) => {
  return (
    <Box component="section" marginBlock={paddingBlock}>
      {children}
    </Box>
  );
};
PaddingBlock.propTypes = {
  paddingBlock: PropTypes.shape({
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    laptop: PropTypes.number,
    desktop: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
};
export default PaddingBlock;
