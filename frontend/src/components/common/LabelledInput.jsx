import {
  FormControl,
  IconButton,
  InputAdornment,
  // MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const LabelledInput = ({
  label,
  placeholder,
  startAdornment,
  endAdornment,
  onChange,
  onBlur,
  value,
  name,
  error,
  list,
  helperText,
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
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        multiline
        select={list ? true : false}
        name={name}
        error={error}
        helperText={helperText}
        rows={multiLine ? 4 : 1}
        slotProps={{
          select: {
            native: true,
          },
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
      >
        {list &&
          list.map(option => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
      </TextField>
    </FormControl>
  );
};

LabelledInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  startAdornment: PropTypes.element,
  endAdornment: PropTypes.element,
  list: PropTypes.array,
  multiLine: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LabelledInput;
