import React from "react";
import ProtoTypes from "prop-types";

import "./styles.css";

const Card = ({ text, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <span className="mobileLine" style={{ backgroundColor: bgColor }}></span>
      {text}
    </div>
  );
};

Card.protoTypes = {
  text: ProtoTypes.string.isRequired,
  bgColor: ProtoTypes.string
};

Card.defaultProps = {
  bgColor: "#ccc"
};

export default Card;
