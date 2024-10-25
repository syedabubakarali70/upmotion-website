import PropTypes from "prop-types";

const UpmotionLogo = ({
  color = "var(--palette-primary-main)",
  width = "40",
  height = "40",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 288.928 221.707"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="a">
        <path
          d="M-522.794 214.498h841.89v-595.276h-841.89Z"
          fill="currentColor"
        />
      </clipPath>
    </defs>
    <path
      d="M0 0h-86.956c-3.593 0-6.499-3.078-6.499-6.884v-32.014c0-3.749 2.906-6.828 6.499-6.828h29.94c-3.266-12.013-37.391-78.523-77.288-78.523-19.533 0-30.167 12.257-30.167 35.148v84.12c0 2.966-1.959 4.981-4.925 4.981h-35.819c-2.967 0-4.982-2.015-4.982-4.981v-94.418c0-42.367 37.443-66.881 71.527-66.881 49.794 0 98.675 45.068 101.309 101.43l-.522-28.227c.336-3.974 2.015-5.317 4.981-5.317h34.14c2.967 0 5.261 1.959 5.261 4.981V0Z"
      fill={color} /* dynamic color via props */
      transform="matrix(1.33333 0 0 -1.33333 280.264 0)"
      clipPath="url(#a)"
    />
  </svg>
);
UpmotionLogo.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default UpmotionLogo;
