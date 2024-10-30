import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const LabelledInput = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
  multiLine = false,
}) => {
  return (
    <FormControl
      variant="standard"
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: label ? "space-between" : "flex-end",
        height: "100%",
      }}
    >
      {label && (
        <Typography sx={{ mb: 1, fontWeight: 600 }}>{label}</Typography>
      )}
      <TextField
        placeholder={placeholder}
        multiline
        rows={multiLine ? 4 : 1}
        slotProps={{
          input: {
            startAdornment: startAdornment && (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
            endAdornment: endAdornment && (
              <InputAdornment position="end">
                <IconButton>{endAdornment}</IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </FormControl>
  );
};

LabelledInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.element,
  endAdornment: PropTypes.element,
  multiLine: PropTypes.bool,
};

export default LabelledInput;
