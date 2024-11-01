import PropTypes from "prop-types";

const CustomSVG = ({ width = 96, height = 96 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          id="b"
          x1="25.537"
          y1="23.881"
          x2="89.629"
          y2="62.292"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DA19ff" />
          <stop offset="1" />
        </linearGradient>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M.104 20.803 75.085.71l20.092 74.982-74.982 20.092z"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m48.104 79.83-6.076-62.663 5.148-.501 6.076 62.664zM32.16 36.324 21.18 55.338l19.015 10.978-2.587 4.481-23.496-13.565 13.565-23.496zM57.67 25.7l23.496 13.565L67.602 62.76l-4.482-2.588L74.1 41.16 55.084 30.18z"
          fill="url(#b)"
        />
      </g>
    </svg>
  );
};

CustomSVG.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CustomSVG;
