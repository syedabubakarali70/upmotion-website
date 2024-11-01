import { Box } from "@mui/material";
import PropTypes from "prop-types";
const PaddingBlock = ({
  children,
  paddingBlock = { mobile: 2, tablet: 4, laptop: 6 },
  id,
}) => {
  return (
    <Box
      component="section"
      paddingBlock={paddingBlock}
      id={id}
      paddingInline={{ mobile: 2, tablet: 4, laptop: 8, desktop: 12 }}
      width={"100%"}
      maxWidth="100rem"
      mx="auto"
    >
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
  id: PropTypes.string,
};
export default PaddingBlock;
