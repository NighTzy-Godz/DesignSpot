import React from "react";

const Button = ({ text, btnEvent = () => {} }) => {
  return (
    <React.Fragment>
      <button onClick={btnEvent}>{text}</button>
    </React.Fragment>
  );
};

export default Button;
