import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ path, label, btnEvent = () => {} }) => {
  return (
    <React.Fragment>
      <Link to={path} onClick={btnEvent}>
        {label}
      </Link>
    </React.Fragment>
  );
};

export default LinkButton;
