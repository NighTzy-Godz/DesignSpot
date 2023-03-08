import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ path, label }) => {
  return (
    <React.Fragment>
      <Link to={path}>{label}</Link>
    </React.Fragment>
  );
};

export default LinkButton;
