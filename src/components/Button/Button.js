import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = ({ text, clickHandler, type }) => {
  return (
    <button className={type} onClick={clickHandler}>
      {text}
    </button>
  );
};

Button.prototypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  type: PropTypes.string
};

Button.defaultProps = {
  clickHandler: () => {},
  type: "primary-btn"
};

export default Button;
