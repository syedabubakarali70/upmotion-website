import {
  Alert,
  Button,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import PaddingBlock from "./PaddingBlock";
import LabelledInput from "./LabelledInput";
import { FadeLeft, FadeRight } from "../animations";
import Paper from "@mui/material/Paper";
import { useReducer, useRef, useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const from_nameSchema = z.string().min(1, "Name is required");
const emailSchema = z.string().email("Invalid email address");
const numberSchema = z
  .string()
  .regex(/^[0-9]{11}$/, "Phone number must be 10 digits");

const fieldSchemas = {
  from_name: from_nameSchema,
  email: emailSchema,
  number: numberSchema,
};

const initialState = {
  open: false,
  isLoading: false,
  isError: false,
};

// Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true, isError: false, open: false };
    case "SUCCESS":
      return { ...state, isLoading: false, isError: false, open: true };
    case "ERROR":
      return { ...state, isLoading: false, isError: true, open: true };
    case "CLOSE_TOAST":
      return { ...state, open: false };
    case "RESET":
      return { ...state, isLoading: false, isError: false, open: false };
    default:
      return state;
  }
}

const ContactUs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    number: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    from_name: "",
    email: "",
    number: "",
  });

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    dispatch({ type: "LOADING" });
    emailjs
      .sendForm("service_rmp4dne", "template_4wm2eds", form.current, {
        publicKey: "LLbbwDtkBniJFfSUN",
      })
      .then(
        () => {
          dispatch({ type: "SUCCESS" });
          setFormData({ from_name: "", email: "", number: "", message: "" });
        },
        error => {
          dispatch({ type: "ERROR" });
          console.log("FAILED...", error.text);
        }
      );
  };

  const validateFieldOnBlur = (field, value) => {
    const schema = fieldSchemas[field];
    const result = schema.safeParse(value);

    if (result.success) {
      setErrors(prevErrors => ({ ...prevErrors, [field]: "" }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [field]: result.error.errors[0].message,
      }));
    }
  };
  const validateFieldOnChange = (field, value) => {
    const schema = fieldSchemas[field];
    const result = schema.safeParse(value);

    if (result.success) {
      setErrors(prevErrors => ({ ...prevErrors, [field]: "" }));
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    validateFieldOnChange(name, value);
  };
  const handleBlur = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    validateFieldOnBlur(name, value);
  };
  const services = [
    {
      value: "Software Development",
    },
    {
      value: "No-Code Development",
    },
    {
      value: "SEO",
    },
    {
      value: "IT Outsourcing",
    },
    {
      value: "Emerging Technologies",
    },
    {
      value: "Advisory",
    },
  ];

  return (
    <PaddingBlock id="contact-us">
      <Stack
        gap={4}
        sx={{
          flexDirection: { mobile: "column", tablet: "row" },
          overflowX: "hidden",
        }}
        width="100%"
        justifyContent="space-between"
      >
        <Stack
          sx={{
            width: { mobile: "100%", tablet: "40%" },
            justifyContent: "center",
          }}
        >
          <FadeRight>
            <Typography variant="h2">Elevate Your Business Today</Typography>
            <Typography>
              Complete the form to collaborate with our specialists and develop
              a customised solution that brings your vision alive.
            </Typography>
          </FadeRight>
        </Stack>
        <Stack
          sx={{
            flex: 1,
            alignItems: { mboile: "stretch", laptop: "flex-end" },
          }}
        >
          <FadeLeft>
            <form ref={form} onSubmit={sendEmail}>
              <Paper
                sx={{
                  borderRadius: 4,
                  width: { mobile: "100%", laptop: "500px" },
                  maxWidth: "600px",
                  ml: "auto",
                  p: { mobile: 2, tablet: 2, laptop: 4 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h3">Book a Discovery Session</Typography>
                <Stack
                  gap={2}
                  sx={{ flexDirection: { mobile: "column", laptop: "row" } }}
                >
                  <LabelledInput
                    label="Full Name"
                    placeholder="Enter your full name"
                    onBlur={handleBlur}
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    error={!!errors.from_name}
                    helperText={errors.from_name}
                  />
                  <LabelledInput
                    label="Email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Stack>
                <LabelledInput
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.number}
                  helperText={errors.number}
                />
                <LabelledInput
                  label="Service"
                  placeholder="Select Service"
                  name="number"
                  list={services}
                  value={services[0].value}
                  // value={formData.number}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={!!errors.number}
                  // helperText={errors.number}
                />
                <LabelledInput
                  multiLine
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  name="message"
                  placeholder="Enter your message"
                  label="Message"
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={
                    !!errors.from_name ||
                    !!errors.number ||
                    !!errors.email ||
                    !formData.from_name ||
                    !formData.number ||
                    !formData.email ||
                    state.isLoading
                  }
                >
                  {!state.isLoading ? (
                    "Submit"
                  ) : (
                    <CircularProgress color="inherit" size={"24px"} />
                  )}
                </Button>
                <Snackbar
                  open={state.open}
                  autoHideDuration={5000}
                  onClose={() => dispatch({ type: "CLOSE_TOAST" })}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <Alert
                    severity={state.isError ? "error" : "success"}
                    variant="filled"
                  >
                    {state.isError
                      ? "Error occured! Please try again later."
                      : "Email sent successfully"}
                  </Alert>
                </Snackbar>
              </Paper>
            </form>
          </FadeLeft>
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

export default ContactUs;
