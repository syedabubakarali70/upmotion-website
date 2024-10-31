import Button from "@mui/material/Button";
import PropTypes from "prop-types";
const ContactUsBtn = ({ content = "Contact Us", closeDrawer }) => {
  const scrollToSection = event => {
    const target = document.getElementById("contact-us");
    const offset = 70; // Set this to your desired offset in pixels

    if (target) {
      const yPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    closeDrawer && closeDrawer();
    event.currentTarget.blur();
  };
  return (
    <Button variant="contained" onClick={scrollToSection}>
      {content}
    </Button>
  );
};

ContactUsBtn.propTypes = {
  closeDrawer: PropTypes.func,
  content: PropTypes.string,
};

export default ContactUsBtn;
