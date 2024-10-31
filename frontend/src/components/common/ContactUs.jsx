import { Button, Stack, Typography } from "@mui/material";
import PaddingBlock from "./PaddingBlock";
import LabelledInput from "./LabelledInput";
import { FadeLeft, FadeRight } from "../animations";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { z } from "zod";

const nameSchema = z.string().min(1, "Name is required");
const emailSchema = z.string().email("Invalid email address");
const phoneNumberSchema = z
  .string()
  .regex(/^[0-9]{10}$/, "Phone number must be 10 digits");

const fieldSchemas = {
  name: nameSchema,
  email: emailSchema,
  phoneNumber: phoneNumberSchema,
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const validateField = (field, value) => {
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

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

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
            <Paper
              sx={{
                borderRadius: 4,
                width: { mobile: "100%" },
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
                flexDirection="row"
                gap={1}
                sx={{ flexDirection: { mobile: "column", laptop: "row" } }}
              >
                <LabelledInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <LabelledInput
                  label="Email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Stack>
              <LabelledInput
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
              <LabelledInput
                multiLine
                placeholder="Enter your message"
                label="Message"
              />
              <Button
                variant="contained"
                disabled={
                  !!errors.name ||
                  !!errors.phoneNumber ||
                  !!errors.email ||
                  !formData.name ||
                  !formData.phoneNumber ||
                  !formData.email
                }
              >
                Submit
              </Button>
            </Paper>
          </FadeLeft>
        </Stack>
      </Stack>
    </PaddingBlock>
  );
};

export default ContactUs;
